import { createSlice } from "@reduxjs/toolkit"

export const balanceSlice = createSlice({
    name: 'balance', 
    initialState: {
        balance: parseFloat(localStorage.getItem('balance')) || 0,
    },
    reducers: {
        increaseBalance: (state, action) => {
            const newBalance = state.balance + action.payload;
            localStorage.setItem('balance', newBalance);
        }
    }
})

export const {increaseBalance} = balanceSlice.actions;
export default balanceSlice.reducer;