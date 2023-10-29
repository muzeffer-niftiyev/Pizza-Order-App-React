import { configureStore } from "@reduxjs/toolkit";
import carouselReducer from "./features/carousel-slice/carousel-slice";
import cartItemsReducer from "./features/cart-items-slice/cart-items-slice";

export default configureStore({
  reducer: {
    carousel: carouselReducer,
    cartItem: cartItemsReducer,
  },
});
