import { configureStore } from "@reduxjs/toolkit";
import carouselReducer from "./features/carousel-slice/carousel-slice";
import cartItemsReducer from "./features/cart-items-slice/cart-items-slice";
import balanceReducer from './features/balance-slice/balance-slice'

export default configureStore({
  reducer: {
    carousel: carouselReducer,
    cartItem: cartItemsReducer,
    balance: balanceReducer,
  },
});
