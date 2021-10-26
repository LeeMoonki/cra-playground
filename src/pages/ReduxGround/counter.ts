import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase: (state) => {
      state.value = state.value + 1;
    },
    decrease: (state) => {
      state.value = state.value - 1;
    },
  },
});

export const { increase, decrease } = counterSlice.actions;

export default counterSlice.reducer;
