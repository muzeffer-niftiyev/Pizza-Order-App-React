import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./features/balance-slice";
import carouselReducer from "./features/carousel-slice";
import cartItemsReducer from "./features/cart-items-slice";
import orderHistoryReducer from "./features/order-history-slice";

export default configureStore({
  reducer: {
    balance: balanceReducer,
    carousel: carouselReducer,
    cartItem: cartItemsReducer,
    orderHistory: orderHistoryReducer,
  },
});
