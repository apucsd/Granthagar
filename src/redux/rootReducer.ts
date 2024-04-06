//
import { baseApi } from "./api/baseApi";
import cartReducer from "./features/cartSlice";
import authReducer from "./features/authSlice";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistCartConfig = {
  key: "cart",
  storage,
};
const persistAuthConfig = {
  key: "auth",
  storage,
};

const persistedCartReducer = persistReducer(persistCartConfig, cartReducer);
const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);

export const rootReducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  auth: persistedAuthReducer,
  cart: persistedCartReducer,
};
