import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentType: 'All',
  currentIndex: null,
};

const dateSlice = createSlice({
  name: 'extraInfo',
  initialState,
  reducers: {
    addCurrentType: (state, action) => {
      state.currentType = action.payload;
    },
    changeCurrentType: (state, action) => {
      state.currentIndex = action.payload;
    },
  },
});

export const { addCurrentType, changeCurrentType } = dateSlice.actions;

export default dateSlice.reducer;
