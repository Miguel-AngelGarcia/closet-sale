"use client";
import React from "react";
import { useState } from "react";
import LetterBubble from "../LetterBubble/LetterBubble";

export const ItemImageSlider = () => {
  const dat = [
    { index: 0, link: "/item_1.jpeg", text: "polo tie image" },
    { index: 1, link: "/item_2.jpeg", text: "baby teto image" },
    { index: 2, link: "/item_3.jpg", text: "polo tie image" },
    { index: 3, link: "/item_4.jpeg", text: "baby teto image" },
    { index: 4, link: "/item_5.jpeg", text: "polo tie image" },
    { index: 5, link: "/item_6.png", text: "baby teto image" },
  ];

  const tumbao_letters = [
    { index: 0, link: "./tumbao_t.svg", text: "letter t" },
    { index: 1, link: "./tumbao_u.svg", text: "letter u" },
    { index: 2, link: "./tumbao_m.svg", text: "letter m" },
    { index: 3, link: "./tumbao_b.svg", text: "letter b" },
    { index: 4, link: "./tumbao_a.svg", text: "letter a" },
    { index: 5, link: "./tumbao_o.svg", text: "letter o" },
  ];

  const [imageIndex, setImageIndex] = useState(0);

  function showPrevImage() {
    setImageIndex((index) => {
      //if image is at start, show the last image
      console.log("Prev");
      if (index === 0) return dat.length - 1;

      return index - 1;
    });
  }

  function showNextImage() {
    setImageIndex((index) => {
      //if image is at start, show the last image
      console.log("Next");
      if (index === dat.length - 1) return 0;

      return index + 1;
    });
  }

  return (
    <div className="product__img-cont">
      <div className="product__img-wrapper">
        <div className="product__img-slider">
          {dat.map((prodImg) => (
            <img
              src={prodImg.link}
              className="slider-imgs"
              key={prodImg.index}
              alt={prodImg.text}
              style={{ translate: `${-100 * imageIndex}%` }}
            />
          ))}
        </div>

        <button onClick={showPrevImage} className="button-cont l_b">
          <div className="arrow-cont">
            <img src="./tumbao_a.svg" className="arrow-img lb"></img>
          </div>
        </button>
        <button className="button-cont r_b" onClick={showNextImage}>
          <div className="arrow-cont">
            <img src="./tumbao_a.svg" className="arrow-img rb"></img>
          </div>
        </button>
      </div>
      <div className="letter_bubble__cont">
        <div className="letter_bubble">
          {tumbao_letters.map((tumbao_letter) => (
            <div className="letter_bubble__wrapper" key={tumbao_letter.index}>
              <div
                className={
                  tumbao_letter.index === imageIndex
                    ? "letter_bubble__bg_shape lbs"
                    : "letter_bubble__bg_shape"
                }
              >
                <div className="letter_bubble__bg_color">
                  <button onClick={() => setImageIndex(tumbao_letter.index)}>
                    <img
                      className="letter"
                      src={tumbao_letter.link}
                      alt={tumbao_letter.text}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/*Took out 
<LetterBubble currIndex={imageIndex} />
*/
