import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterState } from './types';

const initialState: FilterState = {
  searchValue: '',
  currentPage: 1,
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
  },
});

export const { setCurrentPage, setSearchValue } = filterSlice.actions;
export default filterSlice.reducer;
