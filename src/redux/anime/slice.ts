import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { getItemCategories } from '../../service/firebase';

import { Anime, AnimeState, firebaseParams } from './types';

const initialState: AnimeState = {
  items: [],
  status: false,
};

export const getAnime = createAsyncThunk(
  'anime/getAnime',
  async (data: any, { rejectWithValue, dispatch }) => {
    const res = await axios.get(
      `https://api.jikan.moe/v4/anime?page=${data.page}&limit=10&letter=${data.letter}`,
    );
    dispatch(setAnime(res.data.data));
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

export const { setAnime } = animeSlice.actions;
export default animeSlice.reducer;
