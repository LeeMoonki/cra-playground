import { createContext, FC, useContext } from 'react';

import Ground1 from './Ground1';
import PageStore from './PageStore';
import RootStore from './RootStore';

// Page Context
const PageContext = createContext<PageStore>(new PageStore());

const PageContextProvider: FC = ({ children }) => {
  const pageStore = new PageStore();
  return <PageContext.Provider value={pageStore}>{children}</PageContext.Provider>;
};

export const useInject = () => {
  return useContext(PageContext);
};
// // Page Context

// Root Context
const RootContext = createContext<RootStore>(new RootStore());

const RootContextProvider: FC = ({ children }) => {
  const rootStore = new RootStore();
  return <RootContext.Provider value={rootStore}>{children}</RootContext.Provider>;
};

export const useInjectRoot = () => {
  return useContext(RootContext);
};
// // Root Context

const MobxGroundPage = () => {
  return (
    <RootContextProvider>
      <div>
        <PageContextProvider>
          <Ground1 />
        </PageContextProvider>
      </div>
    </RootContextProvider>
  );
};

export default MobxGroundPage;
