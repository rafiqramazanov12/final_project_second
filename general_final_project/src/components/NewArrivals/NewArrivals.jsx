import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./NewArrivals.scss";
import { useNavigate } from "react-router-dom";

const NewArrivals = () => {
  const products = useSelector((state) => state.products.products);
  const [isExpanded, setIsExpanded] = useState(false);
  const [productsData, setProductsData] = useState([]);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleAddProduct = (data) => {
    setProductsData((prev) => {
      const updated = [...prev, data];
      console.log(updated);
      return updated;
    });
  };

  const displayedProducts = isExpanded ? products : products.slice(0, 4);

  return (
    <section className="arrivals_section">
      <h3 className="arrivals_section_title">NEW ARRIVALS   </h3>
      <div className="arrivals_section_products">
        {displayedProducts.map((product, index) => (
          <div
            key={index}
            onClick={() => handleAddProduct(product)}
            className="arrivals_section_products_card"
          >
            <img
              className="arrivals_section_products_card_img"
              src={product.img}
              alt={product.name}
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/productDetail/${product.id}`);   // navigate etdiyin yerde id ile bir yerde yollamaq 
              }}
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
      <button onClick={handleToggle} className="arrivals_section_btn">
        {isExpanded ? "Show Less" : "View All"}
      </button>

      <div className="arrivals_section_border"></div>
    </section>
  );
};

export default NewArrivals;
