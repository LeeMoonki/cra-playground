import React, { FC, useContext, useState } from 'react';

export const useProviderCounter = () => {
  const [count, setCount] = useState(0);
  const [content, setContent] = useState('');

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return {
    count,
    increase,
    decrease,

    content,
    setContent,
  };
};

export const CounterContext = React.createContext<null | ReturnType<typeof useProviderCounter>>(
  null
);

export const useCounterContext = () => {
  return useContext(CounterContext);
};

export const CounterContextProvider: FC = ({ children }) => {
  const counter = useProviderCounter();

  return <CounterContext.Provider value={counter}>{children}</CounterContext.Provider>;
};
