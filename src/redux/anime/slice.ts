import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { getItemCategories } from '../../service/firebase';

import { Anime, AnimeState, firebaseParams } from './types';

const initialState: AnimeState = {
  items: [],
  status: false,
  pages: 10,
};

export const getAnime = createAsyncThunk(
  'anime/getAnime',
  async (data: any, { rejectWithValue, dispatch }) => {
    if (data.letter.length > 0) {
      const res = await axios.get(
        `https://api.jikan.moe/v4/anime?letter=${data.letter}&page=${data.page}`,
      );
      dispatch(setAnime(res.data.data));
      dispatch(setPages(res.data.pagination.last_visible_page));
    }
    if (data.letter.length === 0) {
      const res = await axios.get(
        `https://api.jikan.moe/v4/anime?page=${data.page}&limit=10&rating${data.rating}`,
      );
      dispatch(setAnime(res.data.data));
      dispatch(setPages(res.data.pagination.last_visible_page));
    }
  },
);
export const getAnimeFB = createAsyncThunk(
  'anime/getAnimeFB',
  async (obj: firebaseParams, { rejectWithValue, dispatch }) => {
    const items = await getItemCategories(obj.uid, obj.category);
    dispatch(setAnime(items));
  },
);

const animeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {
    setAnime: (state, action: PayloadAction<Anime[]>) => {
      state.items = action.payload;
    },
    setPages: (state, action: PayloadAction<number>) => {
      state.pages = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAnime.pending, (state, action) => {
      state.status = false;
    });
    builder.addCase(getAnime.fulfilled, (state, action) => {
      state.status = true;
    });
    builder.addCase(getAnimeFB.pending, (state, action) => {
      state.status = false;
    });
    builder.addCase(getAnimeFB.fulfilled, (state, action) => {
      state.status = true;
    });
  },
});

export const { setAnime, setPages } = animeSlice.actions;
export default animeSlice.reducer;
