"use client";
import React from "react";
import { useState } from "react";
import ProductTable from "./ProductTable";
import { ItemImageSlider } from "./ItemImageSlider";
import { CheckoutForm } from "../CheckoutForm";

const ItemPage = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <section className="t_item-wrapper">
      <div className="product-cont">
        <div className="product-grid">
          <ItemImageSlider />
          <div className="product__desc-cont">
            <h1 className="product__name-brand">Brand Name</h1>
            <h2 className="product__name-title">
              Brand Name - Specific Item Title
            </h2>
            <div className="product__price-cont">
              <div className="product__price">
                <span>750</span>
                <span>$</span>
              </div>
            </div>
            <CheckoutForm />
            <div className="product__details">
              <h2 className="hd_details">
                <button className="accordion-button">
                  <span>Details</span>
                </button>
              </h2>
              <div className="product__desc">
                <p className="prod_desc_p">
                  Guacamaya: A South American Clothing Brand Rooted in Heritage
                  and Sustainability.
                </p>

                <p className="prod_desc_p">
                  Born in 2009, Guacamaya is a family-owned clothing brand that
                  blends South American culture with minimalist design to create
                  something truly timeless. Inspired by the classic sailor
                  sweater, Guacamaya celebrates the natural beauty of Paraguay
                  and its surrounding regions, while embracing values like
                  sustainability, craftsmanship, and authenticity.
                </p>
                <p className="prod_desc_p">
                  At the heart of Guacamaya is its commitment to the
                  environment. The brand sources premium merino wool from
                  Uruguay and Patagonia, where the finest wool is ethically
                  produced and 100% mulesing-free. This wool is spun into a
                  long-lasting, luxuriously soft yarn that’s perfect for
                  creating pieces that you can wear season after season, without
                  the waste.
                </p>

                <p className="prod_desc_p">Thanks, ChatGPT.</p>
              </div>
              <ProductTable />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemPage;
