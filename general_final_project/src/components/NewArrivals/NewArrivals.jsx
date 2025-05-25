import React, { useState } from "react";
import "./NewArrivals.scss";
import arrivalsFirstImg from "../../assets/images/arrivals_first_img.png";
import arrivalSecondImg from "../../assets/images/arrivals_second_img.png";
import arrivalsThirdImg from "../../assets/images/arrivals_third_img.png";
import mainFourthImg from "../../assets/images/arrivals_fourth_img.png";
import mainFifththImg from "../../assets/images/arrivals_fifth_img.png";
import mainSixImg from "../../assets/images/arrivals_sixth_img.png";
import mainSeventhImg from "../../assets/images/arrivals_seventh_img.png";
import mainEighthImg from "../../assets/images/arrivals_eighth_img.png";


const products = [
  {
    img: arrivalsFirstImg,
    name: "T-SHIRT WITH TAPE DETAILS",
    ratingStars: "⭐️⭐️⭐️⭐️⯨",
    rating: "4.5/5",
    price: "$120",
  },
  {
    img: arrivalSecondImg,
    name: "SKINNY FIT JEANS",
    ratingStars: "⭐️⭐️⭐️⭐️⯨",
    rating: "3.5/5",
    price: "$240",
  },
  {
    img: arrivalsThirdImg,
    name: "CHECKERED SHIRT",
    ratingStars: "⭐️⭐️⭐️⭐️⯨",
    rating: "4.5/5",
    price: "$180",
  },
  {
    img: mainFourthImg,
    name: "CHECKERED SHIRT",
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
    img: mainFifththImg,
    name: "Gradient Graphic T-shirt",
    ratingStars: "⭐️⭐️⭐️⭐️⯨",
    rating: "3.5/5",
    price: "$145",

  },
 {

     name: "Polo with Tipping Details",
     ratingStars: "⭐️⭐️⭐️⭐️⯨",
     rating: "4/5",
     img: mainSixImg,
     price: "$180",
 }
];

const NewArrivals = () => {
  const [visibleCount, setVisibleCount] = useState(4); 

  const handleViewAll = () => {
    setVisibleCount((prev) => Math.min(prev + 4, products.length)); 
  };

  return (
    <section className="arrivals_section">
      <h3 className="arrivals_section_title">NEW ARRIVALS</h3>
      <div className="arrivals_section_products">
        {products.slice(0, visibleCount).map((product, index) => (
          <div key={index} className="arrivals_section_products_card">
            <img
              className="arrivals_section_products_card_img"
              src={product.img}
              alt={product.name}
            />
            <p className="arrivals_section_products_card_name">{product.name}</p>
            <div className="arrivals_section_products_card_flex">
              <p>{product.ratingStars}</p>
              <p>{product.rating}</p>
            </div>
            <p className="arrivals_section_products_card_price">{product.price}</p>
          </div>
        ))}
      </div>
      {visibleCount < products.length && (
        <button onClick={handleViewAll} className="arrivals_section_btn">
          View All
        </button>
      )}
    </section>
  );
};

export default NewArrivals;
