import { createSlice } from "@reduxjs/toolkit";

export const orderHistorySlice = createSlice({
  name: "orderHistory",
  initialState: {
    orderHistory: JSON.parse(localStorage.getItem("orderHistory")) || [],
    isHistoryOpen: false,
    isHistoryItemClicked: false,
    clickedOrderId: null,
  },
  reducers: {
    addOrderToHistory: (state, action) => {
      const updatedHistory = [...state.orderHistory, action.payload];
      state.orderHistory = updatedHistory;
      localStorage.setItem("orderHistory", JSON.stringify(updatedHistory));
    },

    clearHistory: (state) => {
      state.orderHistory = [];
      localStorage.setItem("orderHistory", JSON.stringify([]));
    },

    closeHistory: (state) => {
      state.isHistoryOpen = false;
    },

    toggleHistory: (state) => {
      state.isHistoryOpen = !state.isHistoryOpen;
    },

    toggleHistoryItemClicked: (state) => {
      state.isHistoryItemClicked = !state.isHistoryItemClicked;
    },

    setClickedId: (state, action) => {
      state.clickedOrderId = action.payload;
    },

    resetClickedId: (state) => {
      state.clickedOrderId = null;
    },
  },
});

export const {
  setClickedId,
  closeHistory,
  clearHistory,
  toggleHistory,
  resetClickedId,
  addOrderToHistory,
  toggleHistoryItemClicked,
} = orderHistorySlice.actions;
export default orderHistorySlice.reducer;
