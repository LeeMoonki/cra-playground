import { css } from '@emotion/react';
import { Nav, Navigations } from './navigation';

export const Header = ({ navigations }: { navigations: Navigations }) => {
  return (
    <header css={header}>
      <h1>Hello CRA</h1>
      <Nav navigations={navigations} />
    </header>
  );
};

const header = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
