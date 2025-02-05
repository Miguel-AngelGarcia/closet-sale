"use client";
import React from "react";
import { useState } from "react";

const CheckoutForm = () => {
  const avail_sizes = [
    { index: 0, size: "XXS" },
    { index: 1, size: "XS" },
    { index: 2, size: "S" },
    { index: 3, size: "M" },
    { index: 4, size: "L" },
    { index: 5, size: "XL" },
    { index: 6, size: "XXL" },
  ];

  const [sizeIndex, setSizeIndex] = useState(0);

  return (
    <>
      <form className="form__var inline__form">
        <div data-product_id="" className="data-product_id size_atc_cont">
          <div className="size-block-variation">
            <div className="size-block">
              <label>SIZE</label>
              <select className="size-raw-select">
                <option value="">choose an option</option>
              </select>
              <ul className="size-selection">
                {avail_sizes.map((avail_size) => (
                  <li
                    className={
                      avail_size.index === sizeIndex
                        ? "variable_item vib vi-sel"
                        : "variable_item vib"
                    }
                    onClick={() => setSizeIndex(avail_size.index)}
                    key={avail_size.index}
                  >
                    <div className="it-size">
                      <span>{avail_size.size}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="single_size_wrap">
              <div className="config-btn">
                <button type="submit" className="button_tumbao">
                  ADD TO BAG
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;
