import React, { useCallback, useState } from 'react';

const InlineFunction = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Component1 text={'inline1'} />
      <Component2 text={'inline2'} />
      <button
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increase the count
      </button>
    </div>
  );
};

const Component1 = ({ text }: { text: string }) => {
  return (
    <>
      <span>{text}</span>
      <Button
        onClick={() => {
          //
        }}
        text={text}
      />
    </>
  );
};

const Component2 = ({ text }: { text: string }) => {
  const onClick = useCallback(() => {
    //
  }, []);

  return (
    <>
      <span>{text}</span>
      <Button onClick={onClick} text={text} />
    </>
  );
};

const Button = ({ onClick, text }: { onClick: () => void; text: string }) => {
  console.log('render button', text);
  return (
    <button type="button" onClick={onClick}>
      click me ({text})
    </button>
  );
};

export default InlineFunction;
