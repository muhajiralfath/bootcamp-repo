import { createSlice } from "@reduxjs/toolkit";

const balanceSlice = createSlice({
    name: "balance",
    initialState: {
        transactions: [],
    },

    reducers: {
        addTransactions: (state, action) => {
            const { title, type, amount, date } = action.payload;
            state.transactions.push({ title, type, amount, date });
        },
    },
});

export const { addTransactions } = balanceSlice.actions;
export default balanceSlice.reducer;
