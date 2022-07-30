import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import productsReducer from "./reducers/products.reducer";

export default configureStore({
  reducer: {
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});
