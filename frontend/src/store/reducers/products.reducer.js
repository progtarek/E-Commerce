import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Products } from "../../utils/agent";

export const loadProductsList = createAsyncThunk(
  "products",
  async (_, { getState }) => {
    const state = getState();
    const response = await Products.getAll({
      skip: state?.products?.docs?.length || 0,
    });
    return response;
  }
);

const initialState = {
  docs: [],
  limit: 10,
  skip: 0,
  total: 0,
  errorMessage: "",
  loading: false,
};

export const productsReducer = createSlice({
  name: "products",
  initialState,
  reducers: {},

  extraReducers: function (builder) {
    builder.addCase(loadProductsList.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loadProductsList.rejected, (state, action) => {
      state.errorMessage = action?.error?.message;
      state.loading = false;
    });
    builder.addCase(loadProductsList.fulfilled, (state, action) => {
      state.docs = [...state.docs, ...action.payload.docs];
      state.total = action.payload.total;
      state.loading = false;
    });
  },
});

export default productsReducer.reducer;
