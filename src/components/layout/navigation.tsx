import { useMemo } from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

export type Navigation = {
  to: string;
  name: string;
};
export type Navigations = Navigation[];

export function Nav({ navigations }: { navigations: Navigations }) {
  const navs = useMemo(() => navigations.map((nav, index) => ({ ...nav, id: index })), [
    navigations,
  ]);

  return (
    <nav>
      <ul css={nav}>
        {navs.map((nav) => (
          <li key={nav.id}>
            <Link to={nav.to}>{nav.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
const nav = css`
  display: flex;
`;
