import { mock } from "node:test";
import React from "react";

const ProductRight = () => {
  const mockDesc = [
    {
      id: "article-id",
      name: "Brand Gender Type Color",
      size: "M",
      color: "Blue",
      fit: "Classic fit",
      collar: "Classic colar",
      closure: "Button closure",
      sleeve: "Long sleeve",
      cuff: "Buttoned cuffs",
      vent: "Side vents",
      composition: "100% Cotton",
      origin: "Japan",
      model_height: "Oliver is 178cm Tall",
      measurements:
        "Size M: Shoulders: 47cm - Chest: 59cm - Sleeves: 61cm - Length: 76cm - Armholes: 26cm",
    },
  ];

  return (
    <div className="right-side">
      <h1>
        <a href={"Link to all producs in same brand"} rel="tag">
          {"Brand to display"}
        </a>
      </h1>
      <h2 className="product-title entry">{"Product title to display"}</h2>
      <form className="product-item-form">
        <div className="size-cart-row">
          <div className="item-size w-1/2">
            <label>Size</label>
            {mockDesc[0].size}
          </div>
          <div className="atc-btn">
            <button className="btn-atc btn" type="submit">
              add to cart
            </button>
          </div>
        </div>
      </form>
      <div className="product-details">
        <div className="accordian-details">
          <h2 className="accordian-details">
            <button className="accordian-button">
              <span>Details</span>
            </button>
          </h2>
          <div className="accordian-desc">
            {mockDesc.map((desc) => (
              <div className="item-desc" key={desc.id}>
                <p>{desc.name}</p>
                <p>Color: {desc.color}</p>
                <p>{desc.fit}</p>
                <p>{desc.collar}</p>
                <p>{desc.closure}</p>
                <p>{desc.sleeve}</p>
                <p>{desc.cuff}</p>
                <p>{desc.vent}</p>
                <p>{desc.closure}</p>
                <p>Composition: {desc.composition}</p>
                <p>Made in {desc.origin}</p>
                <p>{desc.model_height}</p>
                <p>Model size: {desc.size}</p>
                <p>{desc.measurements}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductRight;
