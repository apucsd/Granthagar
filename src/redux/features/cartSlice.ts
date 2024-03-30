import { TBook } from "@/types/index.type";
import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

type TInitialState = {
  products: TBook[];
  quantityById: {};
  totalItems: 0;
  totalPrice: 0;
};
const initialState: TInitialState = {
  products: [],
  quantityById: {},
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isExists = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (!isExists) {
        state.products.push({ ...action.payload, selectedQuantity: 1 });
      }
    },
    updateQuantity: (state, action) => {
      state.products.map((product: any) => {
        if (product._id === action.payload._id) {
          if (action.payload.type === "increase") {
            product.selectedQuantity += 1;
          } else if (action.payload.type === "decrease") {
            if (product.selectedQuantity > 1) {
              product.selectedQuantity -= 1;
            }
          }
        }

        return product;
      });
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product: any) => product._id !== action.payload._id
      );
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
