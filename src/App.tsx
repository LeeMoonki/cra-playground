import { Route } from 'react-router-dom';

import { Header } from './components/layout/header';
import { Navigations } from './components/layout/navigation';

import HomePage from './pages/Home';
import AboutPage from './pages/About';
import PostsPage from './pages/Posts';
import CardsPage from './pages/Cards';
import SignupPage from './pages/Signup';
import ContextAPIGroundPage from './pages/ContextAPIGround';
import ContextAPIGroundWithDispatchPage from './pages/ContextAPIGroundWithDispatch';
import ViewModelExamplePage from './pages/ViewModelExample';
import ReRenderingPage from './pages/ReRendering';

const NAVIGATIONS: Navigations = [
  { to: '/', name: 'Home' },
  { to: '/about', name: 'About' },
  { to: '/posts/1', name: 'Post-1' },
  { to: '/cards', name: 'Cards' },
  { to: '/signup', name: 'Signup' },
  { to: '/context', name: 'Context with useState hook' },
  { to: '/contextdispatch', name: 'Context with dispatch' },
  { to: '/viewmodelexmaple', name: 'ViewModel Example' },
  { to: '/rerendering', name: 'Re Rendering Ground' },
];

function App() {
  return (
    <div className="App">
      <Header navigations={NAVIGATIONS} />
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
      <Route path="/context">
        <ContextAPIGroundPage />
      </Route>
      <Route path="/contextdispatch">
        <ContextAPIGroundWithDispatchPage />
      </Route>
      <Route path="/viewmodelexmaple">
        <ViewModelExamplePage />
      </Route>
      <Route path="/rerendering">
        <ReRenderingPage />
      </Route>
    </div>
  );
}

export default App;
