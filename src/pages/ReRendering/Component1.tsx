/* eslint-disable react-hooks/rules-of-hooks */
import React, { createContext, useContext, useState } from 'react';
import { Floor } from '../../components/Floor';

function useName() {
  const [name, setName] = useState('');

  return {
    name,
    setName,
  };
}

const Context = createContext<null | ReturnType<typeof useName>>(null);

function Component1() {
  const name = useName();

  return (
    <Context.Provider value={name}>
      <Floor name="name context">
        <InputField />
      </Floor>
    </Context.Provider>
  );
}

function InputField() {
  const context = useContext(Context);
  return (
    <div>
      <span>{context?.name}</span>
      <br />
      <input
        type="text"
        value={context?.name}
        onChange={({ target: { value } }) => {
          context?.setName(value);
        }}
      />
    </div>
  );
}

export default Component1;
