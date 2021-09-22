import React, { FC } from 'react';
import { css } from '@emotion/react';
import TitleInput from './Title';
import ContentInput from './Content';
import SubmitButton from './SubmitButton';
import { useViewModel } from './ViewModel';

const Floor1: FC = ({ children }) => {
  console.log('render floor1');
  return <div>{children}</div>;
};

// Adapter View
function TitleAndContent() {
  const {
    model: { title, content },
    operations: { setTitle, setContent },
  } = useViewModel() || { model: {}, operations: {} };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('submit', title, content);
  };

  return (
    <Floor1>
      <form onSubmit={onSubmit} css={form}>
        <TitleInput
          value={title}
          onChange={({ target: { value } }) => setTitle && setTitle(value)}
        />
        <ContentInput
          value={content}
          onChange={({ target: { value } }) => setContent && setContent(value)}
        />
        <SubmitButton disabled={!(title && content)} />
      </form>
    </Floor1>
  );
}

const form = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
`;

export default TitleAndContent;
