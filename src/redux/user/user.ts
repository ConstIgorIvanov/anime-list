import { User } from '@firebase/auth';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  user: User | null | undefined;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User | null>) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
