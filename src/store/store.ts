import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as cartReducer } from "./cart/cart.slice";
import { productApi } from "./api/product.api";

const reducers = combineReducers({
  cart: cartReducer,
  [productApi.reducerPath]: productApi.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
