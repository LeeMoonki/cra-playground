import { css } from '@emotion/react';
import React, { createContext, useContext, useReducer } from 'react';

// reducer
interface CounterState {
  count: number;
}
const initialState: CounterState = {
  count: 0,
};

type IncrementAction = {
  type: 'INCREMENT';
};

type DecrementAction = {
  type: 'DECREMENT';
};

type Action = IncrementAction | DecrementAction;

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
// // context

function ContextAPIGroundWithDispatchPage() {
  const [counterState, counterDispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ counterState, counterDispatch }}>
      <Counter />
    </CounterContext.Provider>
  );
}

function Counter() {
  const counter = useContext(CounterContext);

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

export default ContextAPIGroundWithDispatchPage;
