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
import HookPage from './pages/Hook';
import ForwardRefPage from './pages/ForwardRef';
import TimeoutAndUseRefProblemPage from './pages/TimeoutAndUseRef/problem';
import TimeoutAndUseRefResolvedPage from './pages/TimeoutAndUseRef/resolved';
import RecoilGroundPage from './pages/RecoilGround';
import ReduxGroundPage from './pages/ReduxGround';
import MobsGroundPage from './pages/MobxGround';
import ReactDOMPage from './pages/ReactDOM';
import InputPage from './pages/Input';

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
  { to: '/hook', name: 'Hook page' },
  { to: '/forwardref', name: 'ForwardRef page' },
  { to: '/timeoutref-problem', name: 'Timeout and useRef (Problem)' },
  { to: '/timeoutref-resolved', name: 'Timeout and useRef (resolved)' },
  { to: '/recoil', name: 'Recoil Ground' },
  { to: '/redux', name: 'Redux Ground' },
  { to: '/mobx', name: 'Mobx Ground' },
  { to: '/reactdom', name: 'ReactDOM' },
  { to: '/input', name: 'Input' },
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
      <Route path="/hook">
        <HookPage />
      </Route>
      <Route path="/forwardref">
        <ForwardRefPage />
      </Route>
      <Route path="/timeoutref-problem">
        <TimeoutAndUseRefProblemPage />
      </Route>
      <Route path="/timeoutref-resolved">
        <TimeoutAndUseRefResolvedPage />
      </Route>
      <Route path="/recoil">
        <RecoilGroundPage />
      </Route>
      <Route path="/redux">
        <ReduxGroundPage />
      </Route>
      <Route path="/mobx">
        <MobsGroundPage />
      </Route>
      <Route path="/reactdom">
        <ReactDOMPage />
      </Route>
      <Route path="/input">
        <InputPage />
      </Route>
    </div>
  );
}

export default App;
