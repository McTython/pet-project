import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "@/shared/config/interfaces/IProduct";
import { mockCoupon } from "@/shared/config/mockCoupon";
import { ICart } from "./interfaces/ICart";

const storeInLocalStorage = (data: ICart) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const fetchFromLocalStorage = (): ICart => {
  const cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  } else {
    return {
      products: [],
      totalAmounts: 0,
      totalAmountsWithCoupon: 0,
      isCoupon: false,
      coupon: { text: "", discount: 0 },
    };
  }
};

const initialState = fetchFromLocalStorage();

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart: (state, { payload }: PayloadAction<IProduct>) => {
      const isExists = state.products.some((p) => p.id === payload.id);
      if (isExists) {
        const index = state.products.findIndex(
          (item) => item.id === payload.id,
        );
        if (index !== -1) {
          state.products.splice(index, 1);
        }
      } else state.products.push(payload);
      storeInLocalStorage(state);
    },
    getCartTotal(state) {
      if (state.products.length) {
        state.totalAmounts = state.products.reduce((cartTotal, cartProduct) => {
          return (cartTotal = Number(
            (cartTotal + cartProduct.price).toFixed(2),
          ));
        }, 0);
        if (state.isCoupon) {
          const couponInPercent = state.coupon.discount / 100;
          state.totalAmountsWithCoupon = state.products.reduce(
            (cartTotal, cartProduct) => {
              return (cartTotal = Number(
                (
                  cartTotal +
                  cartProduct.price -
                  cartProduct.price * couponInPercent
                ).toFixed(2),
              ));
            },
            0,
          );
        }
      } else {
        state.isCoupon = false;
        state.coupon = { text: "", discount: 0 };
      }
      storeInLocalStorage(state);
    },
    handleCoupon(state, { payload }: PayloadAction<string>) {
      if (!state.isCoupon && payload) {
        const couponIndex = mockCoupon.findIndex((c) => c.text === payload);
        if (couponIndex !== -1) {
          console.log("coupn is finded");
          state.isCoupon = true;
          state.coupon = mockCoupon[couponIndex];
        }
      } else {
        state.isCoupon = false;
        state.coupon = { text: "", discount: 0 };
      }
    },
    placeOrder: (state) => {
      state.products.splice(0, state.products.length);
      state.totalAmounts = 0;
      state.isCoupon = false;
      state.coupon = { text: "", discount: 0 };
    },
  },
});

export const { reducer, actions } = cartSlice;
