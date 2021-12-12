import React, { useEffect, useState } from 'react';

const InputPage = () => {
  const [value, setValue] = useState('');

  useEffect(() => {
    console.log('value in useEffect', value);
  }, [value]);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = ({ target: { value: v } }) => {
    console.log('onChange', v);
    setValue(v);
  };

  return <input value={value} onChange={onChange} />;
};

export default InputPage;
