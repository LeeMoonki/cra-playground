import React from 'react';
import { useViewModel } from './ViewModel';

function Preview() {
  const {
    model: { title, content },
  } = useViewModel() || { model: {}, operations: {} };

  return (
    <dl>
      <div>
        <dd>제목</dd>
        <dt>{title}</dt>
      </div>
      <div>
        <dd>내용</dd>
        <dt>{content}</dt>
      </div>
    </dl>
  );
}

export default Preview;
