import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <span data-testid="count">{count}</span>
      <section>
        <button onClick={() => setCount(count - 1)}>감소</button>
        <button onClick={() => setCount(count + 1)}>증가</button>
        <button onClick={() => setCount(0)}>초기화</button>
      </section>
    </section>
  );
}

export default Counter;
