import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <span data-testid="count">{count}</span>
    </section>
  );
}

export default Counter;
