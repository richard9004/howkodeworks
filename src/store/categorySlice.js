import { createSlice } from "@reduxjs/toolkit";

const initialCategories = localStorage.getItem('categories') ? JSON.parse(localStorage.getItem('categories')) : [];

const initialState = {
  categories: initialCategories,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.categories.push(action.payload);
      localStorage.setItem('categories', JSON.stringify(state.categories));
    },
  },
});

export const { addCategory } = categorySlice.actions;
export default categorySlice.reducer;
