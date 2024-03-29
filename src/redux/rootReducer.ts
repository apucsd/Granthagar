import { baseApi } from "./api/baseApi";
import cartReducer from "./features/cartSlice";
export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  cart: cartReducer,
};
