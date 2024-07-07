import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "@/shared/config/interfaces/IProduct";

const initialState: IProduct[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart: (state, { payload }: PayloadAction<IProduct>) => {
      const isExists = state.some((p) => p.id === payload.id);
      if (isExists) {
        const index = state.findIndex((item) => item.id === payload.id);
        if (index !== -1) {
          state.splice(index, 1);
        }
      } else state.push(payload);
    },
    placeOrder: (state) => {
      state.splice(0, state.length);
    },
  },
});

export const { reducer, actions } = cartSlice;
