/* eslint-disable @typescript-eslint/no-explicit-any */
import { Queue } from '../queue';

export interface BaseFetchResponseExceptJSON {
  headers: {
    get: jest.Mock<any, any>;
  };
}

export type FetchResponse<FetchResponseExceptJSON = BaseFetchResponseExceptJSON> = {
  [key in keyof FetchResponseExceptJSON]: FetchResponseExceptJSON[key];
} & {
  json(): Promise<any>;
};

export type PromiseFetchResponse = Promise<FetchResponse>;

export type Fetch = {
  (): PromiseFetchResponse;
  mockResolve: (data: any) => void;
  mockReject: (error: any) => void;
  mockClear: () => jest.Mock<PromiseFetchResponse, []>;
};

export const fetchMock = (function (global1) {
  const global = global1;
  const queue = new Queue();

  // fetch의 첫 번째 then의 값을 mocking합니다.
  // json을 빼는 이유는 json의 경우 mockedFetch에서 queue에서 뺀 값을 접근해서 사용해야 하기 때문입니다.
  // 중요 ! : 만약 headers의 특정 값, 또는 메서드가 없어 에러가 발생한다면 여기에 추가해주세요.
  const fetchResponseExceptJSON: BaseFetchResponseExceptJSON = {
    headers: {
      get: jest.fn(),
    },
  };

  const mockedFetch = jest.fn(function () {
    const fetchGuide = queue.dequeue();

    if (fetchGuide) {
      if (fetchGuide.resolve) {
        return Promise.resolve<FetchResponse>({
          ...fetchResponseExceptJSON,
          json: function () {
            return Promise.resolve(fetchGuide.data);
          },
        });
      } else {
        return Promise.reject(fetchGuide.data);
      }
    } else {
      throw new Error('mocking한 fetch보다 더 많은 fetch가 호출되었습니다.');
    }
  });
  const mockClear = mockedFetch.mockClear;

  /** fetch.mockResolve 앞에 실행되는 fetch를 설정합니다. */
  mockedFetch.mockResolve = (data) => {
    let dataArray = [];
    if (data instanceof Array) {
      dataArray = data;
    } else {
      dataArray = [data];
    }

    for (const d of dataArray) {
      queue.enqueue({ resolve: true, data: d });
    }
  };

  /** fetch.mockResolve 앞에 실행되는 fetch를 설정합니다. */
  mockedFetch.mockReject = (error) => {
    let errorArray = [];
    if (error instanceof Array) {
      errorArray = error;
    } else {
      errorArray = [error];
    }

    for (const e of errorArray) {
      queue.enqueue({ resolve: false, data: e });
    }
  };

  /** fetch의 mock history를 clear 합니다. */
  mockedFetch.mockClear = mockClear;

  return {
    init: () => {
      (global.fetch as any) = mockedFetch;
    },
  };
})(window);
