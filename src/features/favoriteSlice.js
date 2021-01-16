import { createSlice } from "@reduxjs/toolkit";
const saveToLocalStorage = (favorites) => {
  localStorage.setItem("Favorites", JSON.stringify(favorites));
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: [],
  reducers: {
    updateFavorite: (state, action) => {
      state.push(action.payload);
    },
    addFavorite: (state, action) => {
      state.push({ ...action.payload, favorite: true });
      saveToLocalStorage(state);
    },
    removeFavorite: (state, action) => {
      saveToLocalStorage(
        state.filter((favorites) => favorites.id !== action.payload)
      );
      return state.filter((favorites) => favorites.id !== action.payload);
    },
  },
});

export const {
  addFavorite,
  removeFavorite,
  updateFavorite,
} = favoriteSlice.actions;

export const selectFavorite = (state) => state.favorite;

export default favoriteSlice.reducer;
