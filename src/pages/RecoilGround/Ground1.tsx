import React from 'react';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { Floor } from '../../components/Floor';

const textState = atom({
  key: 'textState',
  default: '',
});

const Ground1 = () => {
  return (
    <section>
      <Floor name="textState">
        <InputText />
      </Floor>
      <Floor name="referText">
        <ReferText />
      </Floor>
    </section>
  );
};

const InputText = () => {
  const [text, setText] = useRecoilState(textState);
  console.log('render InputText');
  return (
    <>
      <span>{text}</span>
      <input
        type="text"
        onChange={({ target: { value } }) => {
          setText(value);
        }}
      />
    </>
  );
};

const ReferText = () => {
  const text = useRecoilValue(textState);
  console.log('render ReferText');
  return <p>{text}</p>;
};

export default Ground1;
