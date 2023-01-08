import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentType: 'All',
  currentIndex: null,
  currentBtnMenu: false,
  currentLimit: 3,
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
    changeCurrentLimit: (state, action) => {
      if (action.payload >= 3) state.currentLimit = action.payload;
      if (action.payload === 1) state.currentLimit += 3;
      if (action.payload === 0) state.currentLimit = 3;
    },
  },
});

export const {
  addCurrentType,
  changeCurrentType,
  changeCurrentBtnMenu,
  changeCurrentLimit,
} = dateSlice.actions;

export default dateSlice.reducer;
