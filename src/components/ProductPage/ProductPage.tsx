import React from "react";
import { ProductLeft, ProductRight } from ".";

const ProductPage = () => {
  return (
    <section className="product product-page-wrapper">
      <div id={"productId"} className="relative product-container">
        <div className="prod-inner">
          <ProductLeft />
          <ProductRight />
        </div>
        <div className="related-dummy"></div>
      </div>
    </section>
  );
};

export default ProductPage;
