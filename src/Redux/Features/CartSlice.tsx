import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    AddCart: (state, action) => {
      const existingItemIndex = state.cart.findIndex(
        (item) => item._id === action.payload._id
      );
      if (existingItemIndex !== -1) {
        const updatedCart = [...state.cart];
        console.log(existingItemIndex);
        updatedCart[existingItemIndex].count += action.payload.count;

        return {
          cart: updatedCart,
        };
      } else {
        return {
          cart: [...state.cart, action.payload],
        };
      }
    },
  },
});

export const { AddCart } = CartSlice.actions;
export default CartSlice.reducer;
