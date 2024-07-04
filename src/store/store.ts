import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart/cart.slice";

export const store = configureStore({
  reducer: { cart: cartReducer },
});

export type TypeRootState = ReturnType<typeof store.getState>;
