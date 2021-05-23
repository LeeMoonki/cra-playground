import { useState } from 'react';

interface ControllersProps {
  onIncrease?: () => void;
  onDescrease?: () => void;
  onReset?: () => void;
}

export function Controllers({ onIncrease, onDescrease, onReset }: ControllersProps) {
  return (
    <section>
      <button onClick={() => onDescrease && onDescrease()}>감소</button>
      <button onClick={() => onIncrease && onIncrease()}>증가</button>
      <button onClick={() => onReset && onReset()}>초기화</button>
    </section>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <span data-testid="count">{count}</span>
      <Controllers
        onIncrease={() => setCount(count + 1)}
        onDescrease={() => setCount(count - 1)}
        onReset={() => setCount(0)}
      />
    </section>
  );
}

export default Counter;
