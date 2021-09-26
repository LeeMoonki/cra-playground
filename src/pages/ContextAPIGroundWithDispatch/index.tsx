import { css } from '@emotion/react';
import { Floor } from '../../components/Floor';
import React, { createContext, FC, useContext, useReducer } from 'react';

// reducer
interface CounterState {
  count: number;
  content: string;
}
const initialState: CounterState = {
  count: 0,
  content: '',
};

type IncrementAction = {
  type: 'INCREMENT';
};

type DecrementAction = {
  type: 'DECREMENT';
};

type SetContentAction = {
  type: 'SET_CONTENT';
  content: string;
};

type Action = IncrementAction | DecrementAction | SetContentAction;

const counterReducer = (state: CounterState, action: Action): CounterState => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };
    case 'SET_CONTENT':
      return {
        ...state,
        content: action.content,
      };
    default:
      return state;
  }
};
// // reducer

// context
interface CounterContextType {
  counterState: CounterState;
  counterDispatch: React.Dispatch<Action>;
}
const CounterContext = createContext<null | CounterContextType>(null);

const CounterContextProvider: FC = ({ children }) => {
  const [counterState, counterDispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ counterState, counterDispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
// // context

// pages/ContextAPIGround와 같은 예제를 useReducer 버전으로 작성
// 둘 간의 차이는 없고 다음과 같은 공통 현상 발견
// 1. ContextAPIGroundWithDispatchPage에서 useReducer와 CounterContext.Provider를 사용하면 dispatch마다 Floor 랜더링이 된다.
// (https://stackoverflow.com/questions/65638750/react-context-provider-all-children-re-rendering)
// (https://frontarm.com/james-k-nelson/react-context-performance/)
// 2. 지금처럼 CounterContextProvider를 별도로 분리하고 children을 받으면 dispatch에서 Floor 랜더링이 안 된다.
// 3. Counter의 Floor와 같은 레벨에 Input에 대한 Floor를 두면 Counter와 Input의 업데이트마다 다른 컴포넌트와 Floor 모두 랜더링 된다.

function ContextAPIGroundWithDispatchPage() {
  return (
    <CounterContextProvider>
      <Floor name="counter">
        <Counter />
      </Floor>
      <Floor name="content">
        <Input />
      </Floor>
    </CounterContextProvider>
  );
}

function Counter() {
  const counter = useContext(CounterContext);
  console.log('render counter');

  return (
    <div css={counterContainer}>
      <span>{counter?.counterState.count}</span>
      <div css={counterButtons}>
        <button type="button" onClick={() => counter?.counterDispatch({ type: 'DECREMENT' })}>
          감소
        </button>
        <button type="button" onClick={() => counter?.counterDispatch({ type: 'INCREMENT' })}>
          증가
        </button>
      </div>
    </div>
  );
}
const counterContainer = css`
  display: flex;
  flex-direction: column;
  padding: 20px 50px;
  width: 200px;
`;
const counterButtons = css`
  display: flex;

  & > button {
    width: 100%;
  }
`;

const Input = () => {
  const counter = useContext(CounterContext);
  console.log('render Input');

  return (
    <input
      type="text"
      value={counter?.counterState.content}
      onChange={({ target: { value } }) =>
        counter?.counterDispatch({ type: 'SET_CONTENT', content: value })
      }
    />
  );
};

export default ContextAPIGroundWithDispatchPage;
