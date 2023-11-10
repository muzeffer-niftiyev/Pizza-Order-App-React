import slideData from "../../data/slide-data";
import { createSlice } from "@reduxjs/toolkit";

export const carouselSlice = createSlice({
  name: "carousel",
  initialState: {
    curSlide: 0,
  },
  reducers: {
    goToNextSlide: (state) => {
      state.curSlide = (state.curSlide + 1) % slideData.length;
    },
    goToSlide: (state, action) => {
      state.curSlide = action.payload;
    },
  },
});

export const { goToNextSlide, goToSlide } = carouselSlice.actions;
export default carouselSlice.reducer;
