import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./features/balance-slice/balance-slice";
import carouselReducer from "./features/carousel-slice/carousel-slice";
import cartItemsReducer from "./features/cart-items-slice/cart-items-slice";
import orderHistoryReducer from "./features/order-history-slice/order-history-slice";

export default configureStore({
  reducer: {
    carousel: carouselReducer,
    cartItem: cartItemsReducer,
    balance: balanceReducer,
    orderHistory: orderHistoryReducer,
  },
});
