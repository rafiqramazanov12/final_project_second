import React from 'react';
import "./header.scss";

import headerImgFirst from '../../assets/header_first_img.svg';
import headerImgSecond from '../../assets/header_second_img.svg';
import headerImgThrid from '../../assets/header_hamburger_icon.svg';
import headerImgFourth from '../../assets/header_search_icon.svg';

const Header = ({ onArrivalsClick }) => {
  return (
    <header className='header'>
      <img className='header_responsive_img' src={headerImgThrid} alt="" />
      <h1 className='header_title'>SHOP.CO</h1>

      <nav className="header_navbar">
        <ul className="header_navbar_menu">
          <li className='header_navbar_menu_item'>
            <a className='header_navbar_menu_item_link' href="#">Shop</a>
          </li>
          <li className='header_navbar_menu_item'>
            <a className='header_navbar_menu_item_link' href="#">On Sale</a>
          </li>
          <li className='header_navbar_menu_item'>
            <a 
              className='header_navbar_menu_item_link' 
              href="#"
              onClick={onArrivalsClick} 
            >
              New Arrivals
            </a>
          </li>
          <li className='header_navbar_menu_item'>
            <a className='header_navbar_menu_item_link' href="#">Brands</a>
          </li>
        </ul>
      </nav>

      <input className='header_input' type="text" placeholder='Search for products...' />

      <div className='header_general_picture'>
        <img src={headerImgFourth} alt="search" />
        <img src={headerImgFirst} alt="wishlist" />
        <img src={headerImgSecond} alt="cart" />
      </div>
    </header>
  );
};

export default Header;
