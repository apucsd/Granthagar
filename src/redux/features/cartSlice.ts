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
    addToCart(state, action) {
      const isExists = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (!isExists) {
        // state.products=state.products.push({...action.payload,selectedQu})
        console.log(action.payload);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
