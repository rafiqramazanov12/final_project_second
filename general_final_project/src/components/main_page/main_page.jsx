import React from 'react'
import "./main_page.scss";
import headerImgFirst from '../../assets/header_first_img.svg';
import headerImgSecond from '../../assets/header_second_img.svg';
import  headerImgThrid from '../../assets/header_hamburger_icon.svg' 
import  headerImgFourth from '../../assets/header_search_icon.svg' 
import mainFirstImg from "../../assets/images/main_first_img.jpg";



const Main_page = () => {
  return (
    <>
    <header className='header'>
      <img className='header_responsive_img' src={headerImgThrid} alt="" />
      <h1 className='header_title'>SHOP.CO</h1>
      <nav className="header_navbar">
        <ul className="header_navbar_menu">
          <li className='header_navbar_menu_item'><a className='header_navbar_menu_item_link' href="#">Shop</a></li>
          <li className='header_navbar_menu_item'><a className='header_navbar_menu_item_link' href="#">On Sale</a></li>
          <li className='header_navbar_menu_item'><a className='header_navbar_menu_item_link' href="#">New Arrivals</a></li>
          <li className='header_navbar_menu_item'><a  className='header_navbar_menu_item_link'href="#">Brands</a></li>
        </ul>
      </nav>
      <input className='header_input' type="text"  placeholder='Search for products...'/>
      <div className='header_general_picture'>
        <img src={headerImgFourth} alt="" />
        <img src={headerImgFirst} alt="headerImgFirst" />
        <img src={headerImgSecond} alt="headerImgSecond" />
      </div>

      
    </header>

    <main className='main'>
      <section className='main_section'>

        <div className='main_section_left'>
          <h2 className='main_section_left_title'>FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE</h2>
          <p className='main_section_left_note'>Browse through our diverse range of meticulously crafted garments, designed <br /> to bring out your individuality and cater to your sense of style.</p>
          <button className='main_section_left_btn'>Shop Now</button>
<div>
  <div></div>
  <div></div>
  <div></div>
</div>


        </div>
        <div className='main_section_right'>
          <img className='main_section_right_img' src={mainFirstImg} alt="main_section_right_img" />

        </div>
      </section>
      <div className='main_all_brand'>
       

      </div>
    </main>



      
    </>
  )
}

export default Main_page
