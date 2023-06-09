import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cartSlice from "./cartSlice";
import uislice from "./ui-slice";

const store = configureStore({
    reducer:{
        auth:authSlice.reducer,
        cart: cartSlice.reducer,
        ui: uislice.reducer
    }
})

export default store; 