import React from 'react';
import { useViewModel } from './ViewModel';

function Preview() {
  const {
    model: { content },
  } = useViewModel() || { model: {} };

  console.log('render Preview Content');

  return (
    <div>
      <span>내용 : </span>
      <p>{content}</p>
    </div>
  );
}

export default Preview;
