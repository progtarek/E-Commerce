import React from "react";
import ProductCard from "./ProductCart.component";

const ProductsList = () => {
  return (
    <div className="grid grid-cols-4 gap-7">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <ProductCard />
      ))}
    </div>
  );
};

export default ProductsList;
