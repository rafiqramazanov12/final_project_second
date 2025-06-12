// src/pages/ProductDetail.jsx
import React, { useState } from 'react';
import './productDetail.scss';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket } from '../../redux/basketSlice';


const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products.products);
  const product = products.find((item) => item.id === Number(id));
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => { if (quantity > 1) setQuantity((prev) => prev - 1); };

  const addBasket = () => {
    const payload = {
      id: product.id,
      price: product.price,
      Image: product.img,
      title: product.name,
      quantity,
    };
    dispatch(addToBasket(payload));
  };

 

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
          <div className='cart_section_right_flex_first'>
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
          </div>
          <button
            onClick={addBasket}
            className='cart_section_right_flex_add_to_cart'
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
