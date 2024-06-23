import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 20,
  deleteCount: 1,
  createCount: 1,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += state.createCount;
    },
    decrement: (state) => {
      state.count -= state.deleteCount;
    },
    reset: (state) => {
      state.count = 0;
    },
    setCreateCount: (state, { payload }) => {
      state.createCount = +payload;
    },
    setDeleteCount: (state, { payload }) => {
      state.deleteCount = +payload;
    },
  },
});

export const { increment, decrement, reset, setCreateCount, setDeleteCount } =
  counterSlice.actions;

export default counterSlice.reducer;
