import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../features/weatherSlice";
import favoriteReducer from "../features/favoriteSlice";
export default configureStore({
  reducer: {
    weather: weatherReducer,
    favorite: favoriteReducer,
  },
});
