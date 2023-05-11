import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Params {
  value: number;
}

const initialState: Params = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    updateByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value += -1;
    },
  },
});

export const { updateByAmount, increment, decrement } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
