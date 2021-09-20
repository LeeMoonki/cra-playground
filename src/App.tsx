import { useMemo } from 'react';
import { Link, Route } from 'react-router-dom';
import { css } from '@emotion/react';

import HomePage from './pages/Home';
import AboutPage from './pages/About';
import PostsPage from './pages/Posts';
import CardsPage from './pages/Cards';
import SignupPage from './pages/Signup';

type Navigation = {
  to: string;
  name: string;
};
type Navigations = Navigation[];

function Nav({ navigations }: { navigations: Navigations }) {
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

const NAVIGATIONS: Navigations = [
  { to: '/', name: 'Home' },
  { to: '/about', name: 'About' },
  { to: '/posts/1', name: 'Post-1' },
  { to: '/cards', name: 'Cards' },
  { to: '/signup', name: 'Signup' },
];

function App() {
  return (
    <div className="App">
      <header css={header}>
        <h1>Hello CRA</h1>
        <Nav navigations={NAVIGATIONS} />
      </header>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route path="/posts/:postId">
        <PostsPage />
      </Route>
      <Route path="/cards">
        <CardsPage />
      </Route>
      <Route path="/signup">
        <SignupPage />
      </Route>
    </div>
  );
}

const header = css`
  display: flex;
`;

export default App;
