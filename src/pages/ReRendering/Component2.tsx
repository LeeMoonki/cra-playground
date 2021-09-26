import React, { useState } from 'react';

function Component2() {
  const [foo, setFoo] = useState('');
  const [bar, setBar] = useState('');

  return (
    <div>
      <Foo foo={foo} />
      <Bar bar={bar} />
      <div>
        <label htmlFor="foo">foo 수정 </label>
        <input
          type="text"
          id="foo"
          value={foo}
          onChange={({ target: { value } }) => setFoo(value)}
        />
      </div>
      <div>
        <label htmlFor="bar">bar 수정 </label>
        <input
          type="text"
          id="bar"
          value={bar}
          onChange={({ target: { value } }) => setBar(value)}
        />
      </div>
    </div>
  );
}

function Foo({ foo }: { foo: string }) {
  console.log('render Foo');
  return <h1>{foo}</h1>;
}

function Bar({ bar }: { bar: string }) {
  console.log('render Bar');
  return <h1>{bar}</h1>;
}

export default Component2;
