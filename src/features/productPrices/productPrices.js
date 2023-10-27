import { createSlice } from "@reduxjs/toolkit";

export const productPricesSlice = createSlice({
    name: 'prices',
    initialState: {
        productPrices: {
            pizza: [],
            drinks: [],
            salad: [],
            sauce: [],
        }
    },
    reducers: {
        changePrice: (state, action) => {
            
        }
    }
})