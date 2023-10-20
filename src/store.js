import { configureStore } from "@reduxjs/toolkit";
import carouselReducer from "./features/carouselSlice/carouselSlice";

export default configureStore({
  reducer: {
    carousel: carouselReducer,
  },
});
