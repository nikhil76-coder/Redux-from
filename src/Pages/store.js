// src/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  page1FormData: {
    firstName: '',
    lastName: '',
    applicationDate: '',
    country: '',
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updatePage1FormData: (state, action) => {
      state.page1FormData = { ...state.page1FormData, ...action.payload };
    },
  },
});

// Correctly export the action
export const { updatePage1FormData } = formSlice.actions;

export default configureStore({
  reducer: {
    form: formSlice.reducer,
  },
});
