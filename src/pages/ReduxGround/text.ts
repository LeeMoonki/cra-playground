import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialState = {
  value: '',
};

export const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setText } = textSlice.actions;

export default textSlice.reducer;
