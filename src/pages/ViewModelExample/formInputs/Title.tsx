import { Interpolation, Theme } from '@emotion/react';
import React from 'react';

type Input = React.ClassAttributes<HTMLInputElement> &
  React.InputHTMLAttributes<HTMLInputElement> & {
    css?: Interpolation<Theme>;
  };
type Label = React.ClassAttributes<HTMLLabelElement> &
  React.LabelHTMLAttributes<HTMLLabelElement> & {
    css?: Interpolation<Theme>;
  };

const defaultId = 'title';

// View
function TitleInput(props: Input, labelProps: Label) {
  return (
    <>
      <label htmlFor={defaultId} {...labelProps}>
        제목
      </label>
      <input type="text" id={defaultId} {...props} />
    </>
  );
}

export default TitleInput;
