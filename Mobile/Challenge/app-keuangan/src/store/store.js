import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./balance/balanceSlice";
import loadingReducer from "./app/appSlice";

export const store = configureStore({
    reducer: {
        balance: balanceReducer,
        loading: loadingReducer,
    },
});
