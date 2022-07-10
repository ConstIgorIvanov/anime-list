import { configureStore } from '@reduxjs/toolkit';

import anime from './anime/slice';
import sort from './sort/sort';
import category from './category/category';
import user from './user/user';
const store = configureStore({
  reducer: {
    anime,
    sort,
    category,
    user,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
