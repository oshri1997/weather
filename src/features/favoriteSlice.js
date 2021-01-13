import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: [],
  reducers: {
    addFavorite: (state, action) => {
      state.push({ ...action.payload, favorite: true });
    },
    removeFavorite: (state, action) => {
      return state.filter((favorites) => favorites.id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export const selectFavorite = (state) => state.favorite;

export default favoriteSlice.reducer;
