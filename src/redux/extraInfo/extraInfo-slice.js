import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentType: 'All',
  currentIndex: null,
  currentBtnMenu: false,
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
    changeCurrentBtnMenu: (state, action) => {
      state.currentBtnMenu = action.payload;
    },
  },
});

export const { addCurrentType, changeCurrentType, changeCurrentBtnMenu } =
  dateSlice.actions;

export default dateSlice.reducer;
