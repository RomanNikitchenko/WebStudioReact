import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentType: 'All',
};

const dateSlice = createSlice({
  name: 'extraInfo',
  initialState,
  reducers: {
    addCurrentType: (state, action) => {
      state.currentType = action.payload;
    },
  },
});

export const { addCurrentType } = dateSlice.actions;

export default dateSlice.reducer;
