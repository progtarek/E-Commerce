import { createAsyncThunk } from "@reduxjs/toolkit";
import { Products, Media } from "../../utils/agent";

export const loadProductsList = createAsyncThunk(
  "products",
  async (q, { getState }) => {
    const state = getState();
    return await Products.getAll({
      skip: q ? 0 : state?.products?.docs?.length || 0,
      q,
    });
  }
);

export const createProduct = createAsyncThunk(
  "createProduct",
  async (payload) => {
    return await Products.create(payload);
  }
);

export const findProduct = createAsyncThunk("findProduct", async (id) => {
  return await Products.findProduct(id);
});

export const updateProduct = createAsyncThunk(
  "updateProduct",
  async ({ id, payload }) => {
    return await Products.updateProduct(id, payload);
  }
);

export const removeProduct = createAsyncThunk("removeProduct", async (id) => {
  return await Products.removeProduct(id);
});

export const uploadMedia = createAsyncThunk("upload", async (payload) => {
  return await Media.upload(payload);
});
