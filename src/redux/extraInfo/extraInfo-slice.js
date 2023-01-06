import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentType: 'All',
  currentIndex: null,
  currentBtnMenu: false,
  currentPage: 0,
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
    changeCurrentPage: (state, action) => {
      action.payload > 0
        ? (state.currentPage += action.payload)
        : (state.currentPage = action.payload);
    },
  },
});

export const {
  addCurrentType,
  changeCurrentType,
  changeCurrentBtnMenu,
  changeCurrentPage,
} = dateSlice.actions;

export default dateSlice.reducer;
