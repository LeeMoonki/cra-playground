import React from 'react';
import { css } from '@emotion/react';
import TitleInput from './Title';
import ContentInput from './Content';
import SubmitButton from './SubmitButton';

function TitleAndContent() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('submit');
  };

  return (
    <form onSubmit={onSubmit} css={form}>
      <TitleInput />
      <ContentInput />
      <SubmitButton />
    </form>
  );
}

const form = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
`;

export default TitleAndContent;
