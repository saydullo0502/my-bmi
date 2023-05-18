import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const isNewProduct = state?.find(
        (product) => product?.id === payload?.id
      );
      if (!isNewProduct) {
        return [...state, { ...payload, count: 1 }];
      } else {
        return state.map((product) => {
          if (product.id === payload.id) {
            return {
              ...product,
              count: product.count + 1,
            };
          }
          return {
            ...product,
          };
        });
      }
    },
    decreaseCart: (state, { payload }) => {
      const isMoreProduct = state.find((product) => product.id === payload.id);
      if (isMoreProduct?.count > 1) {
        return state.map((product) => {
          if (product.id === payload.id) {
            return {
              ...product,
              count: product.count - 1,
            };
          }
          return {
            ...product,
          };
        });
      } else {
        return state.filter((product) => product.id !== payload.id);
      }
    },
    removeFromCart: (state, { payload }) =>
      state.filter((product) => product.id !== payload.id),
  },
});

export const { addToCart, decreaseCart, removeFromCart } = cartSlice.actions;

export const setProduct = (product, dispatch, type) => {
  if (type === "+") {
    dispatch(addToCart(product));
  }
  if (type === "-") {
    dispatch(decreaseCart(product));
  }
  if (type === "x") {
    dispatch(removeFromCart(product));
  }
};

export default cartSlice.reducer;
