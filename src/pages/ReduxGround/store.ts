import { configureStore } from '@reduxjs/toolkit';
import textReducer from './text';
import counterReducer from './counter';

const store = configureStore({
  reducer: {
    text: textReducer,
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
