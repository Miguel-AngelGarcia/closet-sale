import React from "react";

const LetterBubble = ({ imageIndex }) => {
  return (
    <div className="letter_bubble">
      <div className="letter_bubble__wrapper">
        <div className="letter_bubble__bg_shape ball">
          <div className="letter_bubble__bg_color">
            <button>
              <img className="letter" src="./tumbao_T.svg" />
            </button>
          </div>
        </div>
      </div>
      <div className="letter_bubble__wrapper">
        <div className="letter_bubble__bg_shape">
          <div className="letter_bubble__bg_color">
            <img className="letter" src="./tumbao_U.svg"></img>
          </div>
        </div>
      </div>
      <div className="letter_bubble__wrapper">
        <div className="letter_bubble__bg_shape">
          <div className="letter_bubble__bg_color">
            <img className="letter" src="./tumbao_M.svg"></img>
          </div>
        </div>
      </div>
      <div className="letter_bubble__wrapper">
        <div className="letter_bubble__bg_shape">
          <div className="letter_bubble__bg_color">
            <img className="letter" src="./tumbao_B.svg"></img>
          </div>
        </div>
      </div>
      <div className="letter_bubble__wrapper">
        <div className="letter_bubble__bg_shape">
          <div className="letter_bubble__bg_color">
            <img className="letter" src="./tumbao_A.svg"></img>
          </div>
        </div>
      </div>
      <div className="letter_bubble__wrapper">
        <div className="letter_bubble__bg_shape">
          <div className="letter_bubble__bg_color">
            <img className="letter" src="./tumbao_O.svg"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterBubble;
