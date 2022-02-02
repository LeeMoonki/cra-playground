/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from 'react';

const MemorizingPage = () => {
  const [count, setCount] = useState(0);

  const onClickCounter1 = useCallback(() => {
    console.log('onClickCounter1', count);
    setCount(count + 1);
  }, []);

  const onClickCounter2 = useCallback(() => {
    console.log('onClickCounter2', count);
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <span>{count}</span>
      <button type="button" onClick={onClickCounter1}>
        증가1
      </button>
      <button type="button" onClick={onClickCounter2}>
        증가2
      </button>
    </div>
  );
};

export default MemorizingPage;
