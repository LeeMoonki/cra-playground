import React, { FC } from 'react';
import { CounterContextProvider, useCounterContext } from './context';

const Floor1: FC = ({ children }) => {
  console.log('render floor1');
  return <div>{children}</div>;
};

const Floor2: FC = ({ children }) => {
  console.log('render floor2');
  return <div>{children}</div>;
};

const Counter: FC = () => {
  const counter = useCounterContext();

  console.log('render Counter');

  return (
    <>
      <span>{counter?.count}</span>
      <button type="button" onClick={() => counter?.increase()}>
        증가
      </button>
    </>
  );
};

function ContextAPIGroundPage() {
  console.log('render ContextAPIGroundPage');
  return (
    <CounterContextProvider>
      <Floor1>
        <Floor2>
          <Counter />
        </Floor2>
      </Floor1>
    </CounterContextProvider>
  );
}

export default ContextAPIGroundPage;
