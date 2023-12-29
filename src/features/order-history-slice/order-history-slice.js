import { createSlice } from "@reduxjs/toolkit";

export const orderHistorySlice = createSlice({
  name: "orderHistory",
  initialState: {
    orderHistory: JSON.parse(localStorage.getItem("orderHistory")) || [],
    isHistoryOpen: false,
  },
  reducers: {
    addOrderToHistory: (state, action) => {
      const updatedHistory = [...state.orderHistory, action.payload];
      state.orderHistory = updatedHistory;
      localStorage.setItem("orderHistory", JSON.stringify(updatedHistory));
    },

    clearHistory: () => {
      localStorage.setItem("orderHistory", JSON.stringify([]));
    },

    closeHistory: (state) => {
      state.isHistoryOpen = false;
    },

    toggleHistory: (state) => {
      state.isHistoryOpen = !state.isHistoryOpen;
    },
  },
});

export const { addOrderToHistory, clearHistory, closeHistory, toggleHistory } = orderHistorySlice.actions;
export default orderHistorySlice.reducer;
