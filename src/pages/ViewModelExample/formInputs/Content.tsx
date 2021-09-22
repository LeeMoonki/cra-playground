import { Interpolation, Theme } from '@emotion/react';
import React from 'react';

type TextArea = React.ClassAttributes<HTMLTextAreaElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    css?: Interpolation<Theme>;
  };
type Label = React.ClassAttributes<HTMLLabelElement> &
  React.LabelHTMLAttributes<HTMLLabelElement> & {
    css?: Interpolation<Theme>;
  };

const defaultId = 'content';

// View
function ContentInput(props: TextArea, labelProps: Label) {
  return (
    <>
      <label htmlFor={props.id || defaultId} {...labelProps}>
        내용
      </label>
      <textarea id={props.id || defaultId} {...props}></textarea>
    </>
  );
}

export default ContentInput;
