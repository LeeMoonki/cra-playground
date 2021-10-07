import React, { useMemo, useRef, useState } from 'react';

const useFoo = (init: string, value: string) => {
  console.log('useFoo ', init);
  const r = useRef('r');
  const [count, setCount] = useState(0);
  const [content, setContent] = useState(init);

  const m = useMemo(() => {
    console.log('memo가 동작 !', value);
    return value + 'bar';
  }, [value]);

  return {
    r,
    count,
    setCount,
    content,
    setContent,
    m,
  };
};

function HookPage() {
  const [text, setText] = useState('');
  const hookValues = useFoo('foo init', 'text');

  return (
    <div>
      <input type="text" value={text} onChange={({ target: { value } }) => setText(value)} />
      <span>m : {hookValues.m}</span>
    </div>
  );
}

export default HookPage;
