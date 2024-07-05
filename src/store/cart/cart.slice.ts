import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "@/shared/config/interfaces/IProduct";

const initialState: IProduct[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart: (state, action: PayloadAction<IProduct>) => {
      const isExists = state.some((p) => p.id === action.payload.id);
      if (isExists) {
        const index = state.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.splice(index, 1);
        }
      } else state.push(action.payload);
    },
    placeOrder: (state) => {
      state.splice(0, state.length);
    },
  },
});

export const { reducer, actions } = cartSlice;
