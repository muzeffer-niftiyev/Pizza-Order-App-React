import { createSlice } from "@reduxjs/toolkit";

export const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState: {
    cartItems: [],
    isCartOpen: false,
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.name === newItem.name && item.size === newItem.size
      );

      existingItem
        ? (existingItem.count += 1)
        : state.cartItems.push({ ...newItem, count: 1 });
    },

    increaseCount: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );

      state.cartItems[index].count += 1;
    },

    decreaseCount: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      if (state.cartItems[index].count === 1) return;

      state.cartItems[index].count -= 1;
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },

    clearCart: (state) => {
      state.cartItems = [];
    },

    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },

    closeCart: (state) => {
      state.isCartOpen = false;
    },
  },
});

export const {
  closeCart,
  addToCart,
  clearCart,
  toggleCart,
  increaseCount,
  decreaseCount,
  removeFromCart,
} = cartItemsSlice.actions;
export default cartItemsSlice.reducer;
