import React from "react";
import { ProductLeft, ProductRight, RelatedProducts } from ".";

const ProductPage = () => {
  return (
    <section className="product product-page-wrapper">
      <div id={"productId"} className="relative product-container">
        <div className="prod-inner">
          <ProductLeft />
          <ProductRight />
        </div>
        <RelatedProducts />
      </div>
    </section>
  );
};

export default ProductPage;
