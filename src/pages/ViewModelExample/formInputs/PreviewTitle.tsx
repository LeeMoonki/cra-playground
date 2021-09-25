import React, { useMemo } from 'react';
import { useViewModel } from './ViewModel';

function Preview() {
  const {
    model: { title },
  } = useViewModel() || { model: {} };

  const title1 = useMemo(() => {
    // 고비용 로직
    console.log('preview title useMemo');
    return title;
  }, [title]);

  console.log('render Preview Title');

  return (
    <div>
      <span>내용 : </span>
      <p>{title1}</p>
    </div>
  );
}

export default Preview;
