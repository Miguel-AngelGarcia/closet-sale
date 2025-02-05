import React from "react";
import { useState } from "react";

const ProductTable = () => {
  const product_categories = [
    {
      categoryId: 1,
      categoryName: "Top",
    },
    {
      categoryId: 2,
      categoryName: "Bottom",
    },
    {
      categoryId: 3,
      categoryName: "Shoe",
    },
    {
      categoryId: 4,
      categoryName: "Accessory",
    },
  ];

  return (
    <div className="product-table">
      <ul className="product-category-list">
        {product_categories.map((product_cat) => (
          <li
            key={product_cat.categoryId}
            className={
              product_cat.categoryName === "Top"
                ? "product-category__m"
                : "product-category"
            }
          >
            {product_cat.categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductTable;
