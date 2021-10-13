import { useRef, useState } from 'react';

type Item = {
  name: number;
};

type ItemWithId = Item & {
  id: number;
};

function TimeoutAndUseRefPage() {
  const aid = useRef(10);
  const bid = useRef(200000);
  const itemsRef = useRef<ItemWithId[]>([]);
  const [items, setItems] = useState<ItemWithId[]>([]);

  console.log('render and call', items);
  console.log('--------------------------');

  const push = (item: Item) => {
    const itemWithId = { ...item, id: aid.current };

    itemsRef.current = [...items, itemWithId];
    setItems([...itemsRef.current]);

    console.log('push : ', itemWithId, items, itemsRef.current);

    setTimeout(
      ((zid: number) => () => {
        const position = itemsRef.current.findIndex(({ id }) => id === zid);
        console.log(
          'setTimeout and position : ',
          position,
          aid.current,
          zid,
          items,
          itemsRef.current
        );

        if (position > -1) {
          itemsRef.current.splice(0, 1);

          console.log('remove ! ', itemsRef.current);

          setItems([...itemsRef.current]);
        }
      })(aid.current),
      2000
    );
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
