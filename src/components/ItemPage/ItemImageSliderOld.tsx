import React from "react";
import LetterBubble from "../LetterBubble/LetterBubble";

export const ItemImageSliderOld = () => {
  const dat = [
    { id: 0, link: "/one.jpg", text: "polo tie image" },
    { id: 1, link: "/two.jpg", text: "baby teto image" },
    { id: 2, link: "/one.jpg", text: "polo tie image" },
    { id: 3, link: "/two.jpg", text: "baby teto image" },
    { id: 4, link: "/one.jpg", text: "polo tie image" },
    { id: 5, link: "/two.jpg", text: "baby teto image" },
  ];
  return <div className="product__img-cont">
  <div className="product__img-wrapper">
    <div className="product__img-slider">
      {dat.map((product) => (
        <div className="image-slider-item" key={product.id}>
          <div className="image-cont">
            <img
              src={product.link}
              alt={`${product.text}`}
              fill
              priority={true}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      ))}
    </div>

  </div>
</div>
);
};
