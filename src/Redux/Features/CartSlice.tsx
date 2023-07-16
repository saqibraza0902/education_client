import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  desc: string;
  image: string;
  price: number;
  rating: number;
  title: string;
  writer: string;
  _id: string;
  qnty: number;
}

interface CartState {
  cart: Product[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const existingItemIndex = state.cart.findIndex(
        (item) => item._id === product._id
      );
      if (existingItemIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex].qnty += product.qnty;
      } else {
        state.cart.push({ ...product });
      }
    },
    Increament: (state, action) => {
      const id = action.payload;
      const product = state.cart.find((p) => p._id === id);
      if (product) {
        product.qnty += 1;
      }
    },
    Decrement: (state, action) => {
      const id = action.payload;
      const product = state.cart.find((p) => p._id === id);
      if (product && product.qnty > 1) {
        product.qnty -= 1;
      }
    },
    DeleteProduct: (state, action) => {
      const id = action.payload;
      const updatedCart = state.cart.filter((product) => product._id !== id);
      state.cart = updatedCart;
    },
  },
});

export const { AddCart, Increament, Decrement, DeleteProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
