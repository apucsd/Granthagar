//
import { baseApi } from "./api/baseApi";
import cartReducer from "./features/cartSlice";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "cart",
  storage,
};

const persistedCartReducer = persistReducer(persistConfig, cartReducer);

export const rootReducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  cart: persistedCartReducer,
};
