import { createSlice } from "@reduxjs/toolkit";

export const balanceSlice = createSlice({
  name: "balance",
  initialState: {
    balance: parseFloat(localStorage.getItem("balance")) || 0,
  },
  reducers: {
    increaseBalance: (state, action) => {
      const newBalance = Number(state.balance) + Number(action.payload);
      state.balance = newBalance;
      localStorage.setItem("balance", newBalance.toString());
    },
  },
});

export const { increaseBalance } = balanceSlice.actions;
export default balanceSlice.reducer;
