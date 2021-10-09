import { css, Interpolation, Theme } from '@emotion/react';
import React, { useEffect, useRef, useState } from 'react';

type InputProps = React.ClassAttributes<HTMLInputElement> &
  React.InputHTMLAttributes<HTMLInputElement> & {
    css?: Interpolation<Theme>;
  };

const OneDepthInput = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input ref={ref} {...props} />;
});

// const TwoDepthInput = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
//   return <OneDepthInput ref={ref} {...props} />;
// });

const TrialInput = ({
  reference,
  name,
}: {
  reference: React.RefObject<HTMLInputElement>;
  name?: string;
}) => {
  return <input ref={reference} name={name} />;
};

function ForwardRefPage() {
  const [count, setCount] = useState(0);

  const ref1 = useRef<HTMLInputElement>(null);
  // const ref2 = useRef<HTMLInputElement>(null);
  const ref3 = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log('---- ref check ----');
    console.log('ref1 : ', ref1.current);
    // console.log('ref2 : ', ref2.current);
    console.log('ref3 : ', ref3.current);
  }, [count]);

  return (
    <div css={css({ display: 'flex', flexDirection: 'column' })}>
      <h1>Forward Ref</h1>
      <button type="button" onClick={() => setCount(count + 1)}>
        ref 확인
      </button>
      <OneDepthInput ref={ref1} name="ref1" />
      {/* <TwoDepthInput ref={ref2} name="ref2" /> */}
      <TrialInput reference={ref3} name="ref3" />
    </div>
  );
}

export default ForwardRefPage;
