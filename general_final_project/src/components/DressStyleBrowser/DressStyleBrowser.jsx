import React from "react";
import "./DressStyleBrowser.scss";

import partyImg from "../../assets/images/dress_style_browser_first_img.png";
import gymImg from "../../assets/images/dress_style_browser_second_img.png";
import casualImg from "../../assets/images/dress_style_browser_third.png";
import formalImg from "../../assets/images/dress_style_browser_fourth.png";

const DressStyleBrowser = () => {
  return (
    <section className="dress_style_browser">
      <h2 className="dress_style_browser_title">BROWSE BY DRESS STYLE</h2>

      <div className="dress_style_browser_card">
        <div className="dress_style_browser_card_part_one">
          <div className="dress_style_browser_casual">
            <h2 className="dress_style_browser_note">Casual</h2>
            <img
              className="dress_style_browser_casual_img"
              src={casualImg}
              alt="Casual Style"
            />
          </div>

          <div className="dress_style_browser_formal">
            <h2 className="dress_style_browser_note">Formal</h2>
            <img
              className="dress_style_browser_formal_img"
              src={formalImg}
              alt="Formal Style"
            />
          </div>
        </div>

        <div className="dress_style_browser_card_part_two">
          <div className="dress_style_browser_party">
            <h2 className="dress_style_browser_note">Party</h2>
            <img
              className="dress_style_browser_party_img"
              src={partyImg}
              alt="Party Style"
            />
          </div>

          <div className="dress_style_browser_gym">
            <h2 className="dress_style_browser_note">Gym</h2>
            <img
              className="dress_style_browser_gym_img"
              src={gymImg}
              alt="Gym Style"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressStyleBrowser;
