import { configureStore } from "@reduxjs/toolkit";
import carouselReducer from "./features/carouselSlice/carouselSlice";
import cartItemsReducer from "./features/cartItemsSlice/cartItemsSlice";

export default configureStore({
  reducer: {
    carousel: carouselReducer,
    cartItem: cartItemsReducer
  },
});
