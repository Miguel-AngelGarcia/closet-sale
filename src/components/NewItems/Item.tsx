import React from "react";
import { PieceProps } from "@/types";

interface PiecePropsDisplay {
  itemToPurchase: PieceProps;
}
const Item = ({ itemToPurchase }: PiecePropsDisplay) => {
  return (
    <div
      className={`item item__${itemToPurchase.articleType}`}
      key={itemToPurchase.articleId}
    >
      <div className={`img-cont ${itemToPurchase.articleType}-cont`}>
        <img
          src={itemToPurchase.articleImage}
          alt={itemToPurchase.articleAlt}
          className="article"
        />
      </div>
    </div>
  );
};

export default Item;
