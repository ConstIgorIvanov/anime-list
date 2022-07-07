import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { Anime, AnimeState } from './types';

const initialState: AnimeState = {
  items: [],
  status: false,
};

export const getAnime = createAsyncThunk(
  'anime/getAnime',
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get('https://api.jikan.moe/v4/anime');
    dispatch(setAnime(res.data));
  },
);

const animeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {
    setAnime: (state, action: PayloadAction<Anime[]>) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAnime.pending, (state, action) => {
      state.status = false;
    });
    builder.addCase(getAnime.fulfilled, (state, action) => {
      state.status = true;
    });
  },
});

export const { setAnime } = animeSlice.actions;
export default animeSlice.reducer;
