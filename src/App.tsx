import { Link, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import AboutPage from './pages/About';
import PostsPage from './pages/Posts';
import CardsPage from './pages/Cards';
import SignupPage from './pages/Signup';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Hello CRA</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Go To Home</Link>
            </li>
            <li>
              <Link to="/about">Go To About</Link>
            </li>
            <li>
              <Link to="/posts/1">Go To Post1</Link>
            </li>
            <li>
              <Link to="/cards">Go To Cards</Link>
            </li>
            <li>
              <Link to="/signup">Go To Signup</Link>
            </li>
          </ul>
        </nav>
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
      <Route path="signup">
        <SignupPage />
      </Route>
    </div>
  );
}

export default App;
