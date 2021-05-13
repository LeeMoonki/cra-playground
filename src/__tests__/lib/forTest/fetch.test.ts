import { getUserInfo } from '../../../fixtures/lib/forTest/fetch';
import { mockFetch } from '../../../lib/forTest/fetch';

describe('fectch mock을 테스트합니다.', () => {
  it('fetch.mockResolve를 하면 다음 fetch는 정해진 응답값과 함께 Promise.resolve를 반환합니다.', async function () {
    const data = { foo: 'bar' };

    mockFetch(window).mockResolve(data);

    const responseData = await getUserInfo();

    expect(responseData).toEqual(data);
    expect(fetch).toBeCalledTimes(1);
  });

  it('fetch.mockResolve에 배열을 전달하면 하나 이상의 fetch 호출에 대해 mocking을 합니다.', async () => {
    const data = [{ foo: 'bar' }, { bar: 'foo' }];

    mockFetch(window).mockResolve(data);

    const responseData1 = await getUserInfo();
    const responseData2 = await getUserInfo();

    expect(responseData1).toEqual(data[0]);
    expect(responseData2).toEqual(data[1]);
  });

  it('fetch.mockReject를 하면 다음 fetch는 정해진 응답값과 함께 Promise.reject를 반환합니다.', async function () {
    const error = { foo: 'bar' };

    mockFetch(window).mockReject(error);

    try {
      await getUserInfo();
    } catch (err) {
      expect(err).toEqual(error);
    }

    expect(fetch).toBeCalledTimes(1);
  });

  it('fetch.mockReject에 배열을 전달하면 하나 이상의 fetch 호출에 대해 mocking을 합니다.', async () => {
    const errors = [{ foo: 'bar' }, { bar: 'foo' }];

    mockFetch(window).mockReject(errors);

    try {
      await getUserInfo();
    } catch (err) {
      expect(err).toEqual(errors[0]);
    }

    try {
      await getUserInfo();
    } catch (err) {
      expect(err).toEqual(errors[1]);
    }
  });
});
