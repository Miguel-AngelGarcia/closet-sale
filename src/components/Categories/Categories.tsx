import React from "react";
import Image from "next/image";
import { mockProducts } from "@/constants";

const Categories = () => {
  return (
    <section className="categories-wrapper">
      <header>
        <h1 className="cat-header">
          <span className="h-g">{"Men"}</span>
          <span className="h-sc">{""}</span>
        </h1>
      </header>
      <div className="cat-content">
        {mockProducts.map((product) => (
          <div className="c-c-item" key={product.id}>
            <figure className="c box">
              <a href="/" className="prod-a">
                <div className="box-content">
                  <div className="c-c-img-cont">
                    <Image
                      src={product.first_img}
                      alt={`${product.title} first image}`}
                      fill
                      priority={true}
                      className="c-c-first-img relative"
                    />
                    <div className="c-c-sec-img">
                      <Image
                        src={product.sec_img}
                        alt={`${product.title} second image}`}
                        fill
                        priority={true}
                        className="relative"
                      />
                    </div>
                  </div>
                </div>
                <figcaption className="c-c-fc">
                  <div className="c-c-fc-title">
                    <span>{product.title}</span>
                  </div>
                  <div className="c-c-fc-title">
                    <span>{product.price} $</span>
                  </div>
                </figcaption>
              </a>
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
