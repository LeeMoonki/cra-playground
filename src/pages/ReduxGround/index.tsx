import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store, { RootState } from './store';

import { setText } from './text';
import { increase } from './counter';
import { Floor } from '../../components/Floor';

const ReduxGroundPage = () => {
  return (
    <Provider store={store}>
      <div>
        <Floor name="input">
          <Input />
        </Floor>
        <Floor name="counter">
          <Counter />
        </Floor>
        <Floor name="textViewer">
          <TextViewer />
        </Floor>
      </div>
    </Provider>
  );
};

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  console.log('render Counter');

  return (
    <>
      <span>{count}</span>
      <button type="button" onClick={() => dispatch(increase())}>
        증가
      </button>
    </>
  );
};

const Input = () => {
  const text = useSelector((state: RootState) => state.text.value);
  const dispatch = useDispatch();

  console.log('render Input');

  return (
    <input
      type="text"
      value={text}
      onChange={({ target: { value } }) => dispatch(setText(value))}
    />
  );
};

const TextViewer = () => {
  const text = useSelector((state: RootState) => state.text.value);

  console.log('render Viewer');

  return <h1>{text}</h1>;
};

export default ReduxGroundPage;
