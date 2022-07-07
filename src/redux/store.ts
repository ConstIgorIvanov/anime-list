import { configureStore } from '@reduxjs/toolkit';

import anime from './anime/slice';
import sort from './sort/sort';

const store = configureStore({
  reducer: {
    anime,
    sort,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
