import { Interpolation, Theme } from '@emotion/react';
import React from 'react';

type Button = React.ClassAttributes<HTMLButtonElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    css?: Interpolation<Theme>;
  };

function SubmitButton(props: Button) {
  return (
    <button type="submit" {...props}>
      작성
    </button>
  );
}

export default SubmitButton;
