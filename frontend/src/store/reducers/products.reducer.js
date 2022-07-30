import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Products, Media } from "../../utils/agent";

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

export const createProduct = createAsyncThunk(
  "createProduct",
  async (payload) => {
    const response = await Products.create(payload);
    return response;
  }
);

export const findProduct = createAsyncThunk("findProduct", async (id) => {
  const response = await Products.findProduct(id);
  return response;
});

export const updateProduct = createAsyncThunk(
  "updateProduct",
  async ({ id, payload }) => {
    const response = await Products.updateProduct(id, payload);
    return response;
  }
);

export const uploadMedia = createAsyncThunk("upload", async (payload) => {
  const response = await Media.upload(payload);
  return response;
});

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
      state.docs = state.docs.concat([...action.payload.docs]);
      state.total = action.payload.total;
      state.loading = false;
    });
    builder.addCase(createProduct.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      state.errorMessage = action?.error?.message;
      state.loading = false;
    });
    builder.addCase(uploadMedia.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(uploadMedia.rejected, (state, action) => {
      state.errorMessage = action?.error?.message;
      state.loading = false;
    });
    builder.addCase(findProduct.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(findProduct.rejected, (state, action) => {
      state.errorMessage = action?.error?.message;
      state.loading = false;
    });
  },
});

export default productsReducer.reducer;
