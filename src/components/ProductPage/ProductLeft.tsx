import React from "react";
import Image from "next/image";

const ProductLeft = () => {
  const dat = [
    { id: 0, link: "/one.jpg", text: "polo tie image" },
    { id: 1, link: "/two.jpg", text: "baby teto image" },
  ];
  return (
    <div className="left-side">
      <div className="image-slider">
        {dat.map((product) => (
          <div className="image-slider-item" key={product.id}>
            <div className="image-cont">
              <Image
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
  );
};

export default ProductLeft;
