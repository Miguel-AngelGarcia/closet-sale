import React from "react";

const ProductRight = () => {
  return (
    <div className="right-side">
      <h1>
        <a href={"Link to all producs in same brand"} rel="tag">
          {"Brand to display"}
        </a>
      </h1>
      <h2 className="product-title entry">{"Product title to display"}</h2>
      <div className="product-details">
        <div className="accordian-details">
          <h2 className="accordian-details">
            <button className="accordian-button">
              <span>Details</span>
            </button>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProductRight;
