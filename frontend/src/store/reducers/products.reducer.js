import { createSlice } from "@reduxjs/toolkit";
import {
  loadProductsList,
  createProduct,
  findProduct,
  removeProduct,
  uploadMedia,
} from "../actions/products.actions";

const initialState = {
  docs: [],
  limit: 10,
  skip: 0,
  total: 0,
  errorMessage: "",
  loading: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    resetProducts: () => initialState,
  },

  extraReducers: function (builder) {
    builder.addCase(loadProductsList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loadProductsList.rejected, (state, action) => {
      state.errorMessage = action?.error?.message;
      state.loading = false;
    });
    builder.addCase(loadProductsList.fulfilled, (state, action) => {
      state.docs =
        action.payload.skip === 0
          ? [...action.payload.docs]
          : state.docs.concat([...action.payload.docs]);
      state.total = action.payload.total;
      state.loading = false;
    });
    builder.addCase(createProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      state.errorMessage = action?.error?.message;
      state.loading = false;
    });
    builder.addCase(uploadMedia.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(uploadMedia.rejected, (state, action) => {
      state.errorMessage = action?.error?.message;
      state.loading = false;
    });
    builder.addCase(findProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(findProduct.rejected, (state, action) => {
      state.errorMessage = action?.error?.message;
      state.loading = false;
    });
    builder.addCase(removeProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(removeProduct.rejected, (state, action) => {
      state.errorMessage = action?.error?.message;
      state.loading = false;
    });
  },
});

export const { resetProducts } = productsSlice.actions;

export default productsSlice.reducer;
