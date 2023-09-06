import React from "react";
import { ProductLeft } from ".";

const ProductPage = () => {
  return (
    <section className="product-page-wrapper">
      <div id={"productId"} className="relative">
        <div className="product-container">
          <div className="prod-inner">
            <ProductLeft />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
