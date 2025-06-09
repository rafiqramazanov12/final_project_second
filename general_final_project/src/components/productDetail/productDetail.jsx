import React, { useEffect, useState } from 'react';
import './productDetail.scss';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products.products);
  const product = products.find((item) => item.id === Number(id));

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => {if (quantity > 1) setQuantity((prev) => prev - 1);};

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <section className='cart_section'>
      <div className='cart_section_left'>
        <img
          className='cart_section_left_img'
          src={product.img}
          alt={product.name}
        />
      </div>

      <div className='cart_section_right'>
        <h2 className='cart_section_right_title'>{product.name}</h2>
        <p className='cart_section_right_rating_stars'>{product.ratingStars}</p>
        <p className='cart_section_right_price'>{product.price}</p>
        <p>
          This graphic t-shirt which is perfect for any occasion. Crafted from a soft and <br />
          breathable fabric, it offers superior comfort and style.
        </p>

        <div className='cart_section_right_flex'>
          <button className='cart_section_right_flex_first'>

          <button
            onClick={decreaseQuantity}
            className='cart_section_right_flex_btn'
            >
            -
          </button>
          <span className='cart_section_right_flex_quantity'>{quantity}</span>
          <button
            onClick={increaseQuantity}
            className='cart_section_right_flex_btn'
            >
            +
          </button>
            </button>
          <button className='cart_section_right_flex_add_to_cart'>
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
