import { createSelector } from "reselect";

const selectSelf = (state) => state;
export const productsListSelector = createSelector(
  selectSelf,
  (state) => state?.products?.docs
);
export const productsListTotalSelector = createSelector(
  selectSelf,
  (state) => state?.products?.total
);
export const productsListErrorSelector = createSelector(
  selectSelf,
  (state) => state?.products?.errorMessage
);
export const productsListLoadingSelector = createSelector(
  selectSelf,
  (state) => state?.products?.loading
);
