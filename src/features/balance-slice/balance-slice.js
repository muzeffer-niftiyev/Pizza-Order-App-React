import { createSlice } from "@reduxjs/toolkit";

export const balanceSlice = createSlice({
  name: "balance",
  initialState: {
    balance: parseFloat(localStorage.getItem("balance")) || 0,
    isIncreaseBalanceModalOpen: false,
  },
  reducers: {
    increaseBalance: (state, action) => {
      const newBalance = Number(state.balance) + Number(action.payload);
      state.balance = newBalance;
      localStorage.setItem("balance", newBalance.toString());
    },

    decreaseBalance: (state, action) => {
      const newBalance = Number(state.balance) - Number(action.payload);
      state.balance = newBalance;
      localStorage.setItem("balance", newBalance.toString());
    },

    openIncreaseBalanceModal: (state) => {
      state.isIncreaseBalanceModalOpen = true;
    },

    closeIncreaseBalanceModal: (state) => {
      state.isIncreaseBalanceModalOpen = false;
    },
  },
});

export const {
  increaseBalance,
  decreaseBalance,
  openIncreaseBalanceModal,
  closeIncreaseBalanceModal,
} = balanceSlice.actions;
export default balanceSlice.reducer;
