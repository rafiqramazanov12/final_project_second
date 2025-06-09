import React, { useState } from "react";
import "./TopSelling.scss";

import topSellingFirstImg from "../../assets/images/topselling_first_img.png";
import topSellingSecondImg from "../../assets/images/topselling_second_img.png.png";
import topSellingThirdImg from "../../assets/images/topselling_third_img.png";
import topSellingFourthImg from "../../assets/images/topselling_fourth_img.png";
import topSellingFifthImg from "../../assets/images/topselling_fifth_img.png";

import mainSixImg from "../../assets/images/arrivals_sixth_img.png";
import mainSeventhImg from "../../assets/images/arrivals_seventh_img.png";
import mainEighthImg from "../../assets/images/arrivals_eighth_img.png";

const topSellingProducts = [
  {
    img: topSellingFirstImg,
    name: "T-SHIRT WITH TAPE DETAILS",
    ratingStars: "⭐️⭐️⭐️⭐️⯨",
    rating: "4.5/5",
    price: "$120",
  },
  {
    img: topSellingSecondImg,
    name: "SKINNY FIT JEANS",
    ratingStars: "⭐️⭐️⭐️⭐️⯨",
    rating: "3.5/5",
    price: "$240",
  },
  {
    img: topSellingThirdImg,
    name: "CHECKERED SHIRT",
    ratingStars: "⭐️⭐️⭐️⭐️⯨",
    rating: "4.5/5",
    price: "$180",
  },
  {
    img: topSellingFourthImg,
    name: "SLEEVE STRIPED T-SHIRT",
    ratingStars: "⭐️⭐️⭐️⭐️⯨",
    rating: "4.5/5",
    price: "$130",
  },
  {
    img: mainSeventhImg,
    name: "ANOTHER PRODUCT",
    ratingStars: "⭐️⭐️⭐️⭐️⭐️",
    rating: "5/5",
    price: "$200",
  },
  {
    img: mainEighthImg,
    name: "YET ANOTHER PRODUCT",
    ratingStars: "⭐️⭐️⭐️⭐️⯨",
    rating: "4/5",
    price: "$150",
  },
  {
    img: topSellingFifthImg,
    name: "Gradient Graphic T-shirt",
    ratingStars: "⭐️⭐️⭐️⭐️⯨",
    rating: "3.5/5",
    price: "$145",
  },
  {
    img: mainSixImg,
    name: "Polo with Tipping Details",
    ratingStars: "⭐️⭐️⭐️⭐️⯨",
    rating: "4/5",
    price: "$180",
  },
];

const TopSelling = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleProducts = isExpanded
    ? topSellingProducts
    : topSellingProducts.slice(0, 4);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <section className="top_selling_section">
      <h3 className="top_selling_section_title">TOP SELLING</h3>
      <div className="top_selling_section_products">
        {visibleProducts.map((product, index) => (
          <div key={index} className="top_selling_section_products_card">
            <img
              className="top_selling_section_products_card_img"
              src={product.img}
              alt={product.name}
            />
            <p className="top_selling_section_products_card_name">
              {product.name}
            </p>
            <div className="top_selling_section_products_card_flex">
              <p>{product.ratingStars}</p>
              <p>{product.rating}</p>
            </div>
            <p className="top_selling_section_products_card_price">
              {product.price}
            </p>
          </div>
        ))}
      </div>
      <button onClick={handleToggle} className="top_selling_section_btn">
        {isExpanded ? "Show Less" : "View All"}
      </button>
    </section>
  );
};

export default TopSelling;


