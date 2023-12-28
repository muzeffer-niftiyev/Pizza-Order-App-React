import { createSlice } from "@reduxjs/toolkit";

export const orderHistorySlice = createSlice({
  name: "orderHistory",
  initialState: {
    orderHistory: localStorage.getItem("orderHistory") || [],
  },
  reducers: {
    addOrderToHistory: (state, action) => {
      state.orderHistory = [...state.orderHistory, action.payload];
      localStorage.setItem("orderHistory", JSON.stringify(state.orderHistory));
    },
    clearHistory: () => {
      localStorage.setItem("orderHistory", JSON.stringify([]));
    },
  },
});

export const { addOrderToHistory, clearHistory } = orderHistorySlice.actions;
export default orderHistorySlice.reducer;
