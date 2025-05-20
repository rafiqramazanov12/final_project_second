import React from 'react'
import "./main_page.scss";
import headerImgFirst from '../../assets/header_first_img.svg';
import headerImgSecond from '../../assets/header_second_img.svg';

const Main_page = () => {
  return (
    <>
    <header className='header'>
      <h1 className='header_title'>SHOP.CO</h1>
      <nav className="header_navbar">
        <ul className="header_navbar_menu">
          <li className='header_navbar_menu_item'><a className='header_navbar_menu_item_list' href="#">Shop</a></li>
          <li className='header_navbar_menu_item'><a className='header_navbar_menu_item_list' href="#">On Sale</a></li>
          <li className='header_navbar_menu_item'><a className='header_navbar_menu_item_list' href="#">New Arrivals</a></li>
          <li className='header_navbar_menu_item'><a  className='header_navbar_menu_item_list'href="#">Brands</a></li>
        </ul>
      </nav>
      <input className='header_input' type="text"  placeholder='Search for products...'/>
      <div>
        <img src={headerImgFirst} alt="headerImgFirst" />
        <img src={headerImgSecond} alt="headerImgSecond" />
      </div>

      
    </header>

      
    </>
  )
}

export default Main_page
