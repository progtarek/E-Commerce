import React from "react";
import { useSelector } from "react-redux";
import {
  productsListSelector,
  productsListTotalSelector,
  productsListLoadingSelector,
} from "../../store/selectors/products.selector";
import ProductCard from "./ProductCard.component";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadProductsList } from "../../store/reducers/products.reducer";

const ProductsList = () => {
  const dispatch = useDispatch();
  const loadProducts = () => dispatch(loadProductsList());
  const total = useSelector(productsListTotalSelector);
  const products = useSelector(productsListSelector);
  const loading = useSelector(productsListLoadingSelector);

  useEffect(() => {
    dispatch(loadProductsList());
  }, [dispatch]);

  return (
    <InfiniteScroll
      dataLength={products?.length} //This is important field to render the next data
      next={loadProducts}
      hasMore={total !== products?.length}
      refreshFunction={loadProducts}
      pullDownToRefresh
      pullDownToRefreshThreshold={50}
    >
      {loading && products?.length < 10 ? (
        <p className="text-xs text-center">Loading ...</p>
      ) : (
        <div className="grid grid-cols-4 gap-7">
          {products.map((product) => (
            <ProductCard key={product.uniqueName} {...product} />
          ))}
        </div>
      )}
    </InfiniteScroll>
  );
};

export default ProductsList;
