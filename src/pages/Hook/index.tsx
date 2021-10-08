import React, { useMemo, useRef, useState } from 'react';

const useFoo = (init: string, value: string) => {
  const r = useRef(value);
  const [count, setCount] = useState(0);
  const [content, setContent] = useState(init);

  const m1 = useMemo(() => {
    console.log('memo1이 동작 !', init);
    return init + 'bar1';
  }, [init]);

  const m2 = useMemo(() => {
    console.log('memo2가 동작 !', value);
    return value + 'bar2';
  }, [value]);

  console.log('useFoo init : ', init);
  console.log('useFoo ref : ', r.current);
  console.log('useFoo memo : ', m1, m2);

  return {
    r,
    count,
    setCount,
    content,
    setContent,
    m1,
    m2,
  };
};

function HookPage() {
  const [text, setText] = useState('');
  const hookValues = useFoo('foo init', text);

  return (
    <div>
      <input type="text" value={text} onChange={({ target: { value } }) => setText(value)} />
      <br />
      <span>
        m : {hookValues.m1} {hookValues.m2}
      </span>
    </div>
  );
}

export default HookPage;
