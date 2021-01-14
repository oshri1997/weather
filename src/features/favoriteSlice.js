import { createSlice } from "@reduxjs/toolkit";

const favoriteLocalStorage = JSON.parse(localStorage.getItem("Favorites"));
export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: [...favoriteLocalStorage],
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
