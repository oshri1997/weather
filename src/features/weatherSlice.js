import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {},
  reducers: {
    setWeather: (state, action) => {
      state.id = action.payload._id;
      state.city = action.payload.city;
      state.temp = action.payload.temp;
      state.description = action.payload.description;
    },
  },
});

export const { setWeather } = weatherSlice.actions;

export const selectWeather = (state) => state.weather;

export default weatherSlice.reducer;
