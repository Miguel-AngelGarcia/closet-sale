import React from "react";
import Image from "next/image";

const ProductLeft = () => {
  return (
    <div className="left-side">
      <div className="image-slider">
        <div className="image-container">
          <div className="image-item">
            <Image
              src="/one.jpg"
              alt="test image"
              fill
              priority={true}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="image-container">
          <div className="image-item">
            <Image
              src="/two.jpg"
              alt="test image"
              fill
              priority={true}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLeft;
