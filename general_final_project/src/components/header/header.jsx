import React from 'react';
import './header.scss';
import headerImgFirst from '../../assets/header_first_img.svg';
import headerImgSecond from '../../assets/header_second_img.svg';
import headerImgThrid from '../../assets/header_hamburger_icon.svg';
import headerImgFourth from '../../assets/header_search_icon.svg';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';

const Header = ({ onBasketClick }) => {
  const cards = useSelector((state) => state.basket.cards);
  const totalPrice = useSelector((state) => state.basket.totalPrice);

  return (
    <header className='header'>
      <img className='header_responsive_img' src={headerImgThrid} alt="hamburger" />
      <h1 className='header_title'>SHOP.CO</h1>

      <nav className="header_navbar">
        <ul className="header_navbar_menu">
          <li><a href="#">Shop</a></li>
          <li><a href="#">On Sale</a></li>
          <li><a href="#">New Arrivals</a></li>
          <li><a href="#">Brands</a></li>
        </ul>
      </nav>

      <input className='header_input' type="text" placeholder='Search for products...' />

      <div className='header_general_picture'>
        <Badge badgeContent={cards.length} color="primary">
          <img
            src={headerImgFirst}
            alt="wishlist"
            onClick={onBasketClick} 
          />
        </Badge>

        <img src={headerImgFourth} alt="search" />
        <img src={headerImgSecond} alt="cart" />
      </div>

      <div className="header_total_price">
        ${totalPrice}
      </div>
    </header>
  );
};

export default Header;
