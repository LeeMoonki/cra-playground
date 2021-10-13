import { useRef, useState } from 'react';

type Item = {
  name: number;
};

type ItemWithId = Item & {
  id: number;
};

function TimeoutAndUseRefPage() {
  const aid = useRef(0);
  const bid = useRef(100000);
  const itemsRef = useRef<ItemWithId[]>([]);
  const [items, setItems] = useState<ItemWithId[]>([]);

  console.log('render and call', items);
  console.log('--------------------------');

  const push = (item: Item) => {
    const itemWithId = { ...item, id: aid.current };

    itemsRef.current = [...items, itemWithId];
    setItems([...items, itemWithId]);
    console.log('push : ', itemWithId, items, itemsRef.current);

    setTimeout(() => {
      const position = items.findIndex(({ id }) => id === aid.current);

      // setTimeout의 콜백이 호출될 때 items에는 한 단계 과거 값이 들어있고 itemsRef엔 기대하는 현재 값이 들어있다.
      // 따라서 itemsRef를 기준으로 모든 동작을하고 items 상태에 업데이트 해주는 방식으로 해야 한다.
      // 또한 aid.current로 아이디를 찾으려고 할 때 aid는 +1이 된 최신값을 갖고있으므로 이런 방식으로 사용하면 아이템을 항상 찾지 못한다.

      console.log('setTimeout and position : ', position, aid.current, items, itemsRef.current);
      // if (position > -1) {
      //   const itemsAfterRemove = items
      //     .slice(0, position - 1)
      //     .concat(items.slice(position + 1, items.length - 1));

      //   console.log('remove ! ', aid.current, itemsAfterRemove);
      //   setItems(itemsAfterRemove);
      // }
    }, 2000); // 테스트할 땐 2초 안에 2번 역속으로 버튼을 클릭해서 확인하는게 좋습니다.
    aid.current = aid.current + 1;
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          push({ name: bid.current });
          bid.current = bid.current + 1;
        }}
      >
        push
      </button>
    </div>
  );
}

export default TimeoutAndUseRefPage;
