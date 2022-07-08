import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterState, Sort } from './types';

const initialState: FilterState = {
  searchValue: '',
  currentPage: 1,
  rating: 'r17',
  status: 'complete',
  sort: {
    order: 'score',
    query: 'desc',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setRating(state, action: PayloadAction<string>) {
      state.rating = action.payload;
    },
    setStatus(state, action: PayloadAction<string>) {
      state.status = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
  },
});

export const { setCurrentPage, setSearchValue, setRating, setStatus, setSort } =
  filterSlice.actions;
export default filterSlice.reducer;
