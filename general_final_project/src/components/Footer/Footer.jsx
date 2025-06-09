import React from 'react'

import "./footer.scss";

import footerImgFirst from '../../assets/footer_first_icon.svg';
import footerImgSecond from '../../assets/footer_second_icon.svg';
import footerImgThird from '../../assets/footer_third_icon.svg';
import footerImgFourth from '../../assets/footer_fourth_icon.svg';
import footerImgFifth from '../../assets/footer_fifth_icon.svg';
import footerImgSexth from '../../assets/footer_sexth_icon.svg';
import footerImgSeventh from '../../assets/footer_seventh_icon.svg';




const Footer = () => {
  return (
    <>
    <div className='input_card'>
        <h2 className='input_card_title'>STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS</h2>
        <form className='input_card_form'>
            <input className='input_card_form_input' type="text"  placeholder='Enter your email address'/>
            <button className='input_card_form_btn'>Subscribe to Newsletter</button>
        </form>
       
        </div> 

       <footer className="footer">
 

  <div className="footer_content">
    <div className="footer_column brand">
      <h4 className='footer_content_title'>SHOP.CO</h4>
      <p className='footer_content_note'>We have clothes that suits your style and which you're proud to wear. From women to men.</p>
      <div className="footer_content_socials">
        <img src={footerImgFirst} alt="Facebook" />
        <img src={footerImgSecond} alt="Instagram" />
        <img src={footerImgThird} alt="Twitter" />
        <img src={footerImgFourth} alt="LinkedIn" />
      </div>
    </div>

    <div className="footer_content_column">
      <h5 className='footer_content_column_title'>Company</h5>
      <ul className='footer_content_column_menu'>
        <li className='footer_content_column_menu_list'><a className='footer_content_column_menu_list_link' href="#">About</a></li>
        <li className='footer_content_column_menu_list'><a className='footer_content_column_menu_list_link' href="#">Features</a></li>
        <li className='footer_content_column_menu_list'><a className='footer_content_column_menu_list_link' href="#">Works</a></li>
        <li className='footer_content_column_menu_list'><a className='footer_content_column_menu_list_link' href="#">Career</a></li>
      </ul>
    </div>

    <div className="footer_content_column">
      <h5 className='footer_content_column_title'>Help</h5>
      <ul className='footer_content_column_menu'>
        <li className='footer_content_column_menu_list'><a className='footer_content_column_menu_list_link' href="#">Customer Support</a> </li>
        <li className='footer_content_column_menu_list'><a className='footer_content_column_menu_list_link' href="#">Delivery Details</a></li>
        <li className='footer_content_column_menu_list'><a className='footer_content_column_menu_list_link' href="#">Terms & Conditions</a></li>
        <li className='footer_content_column_menu_list'><a className='footer_content_column_menu_list_link' href="#">Privacy Policy</a> </li>
      </ul>
    </div>

    <div className="footer_content_column">
      <h5 className='footer_content_column_title'>FAQ</h5>
      <ul className='footer_content_column_menu'>
        <li className='footer_content_column_menu_list'><a className='footer_content_column_menu_list_link' href="#">Account</a></li>
        <li className='footer_content_column_menu_list'><a className='footer_content_column_menu_list_link' href="#">Manage Deliveries</a> </li>
        <li className='footer_content_column_menu_list'><a className='footer_content_column_menu_list_link' href="#">Orders</a></li>
        <li className='footer_content_column_menu_list'><a className='footer_content_column_menu_list_link' href="#">Payments</a></li>
      </ul>
    </div>

    <div className="footer_content_column">
      <h5 className='footer_content_column_title'>Resources</h5>
      <ul className='footer_content_column_menu'>
        <li className='footer_content_column_menu_list'><a className='footer_content_column_menu_list_link' href="#">Free eBooks</a> </li>
        <li className='footer_content_column_menu_list'><a className='footer_content_column_menu_list_link' href="#">Development Tutorial</a></li>
        <li className='footer_content_column_menu_list'><a className='footer_content_column_menu_list_link' href="#">How to - Blog</a></li>
        <li className='footer_content_column_menu_list'><a className='footer_content_column_menu_list_link' href="#">YouTube Playlist</a></li>
      </ul>
    </div>
  </div>

  <div className="footer_content_bottom">
    <p className='footer_content_bottom_title'>© SHOP.CO 2025, All Rights Reserved</p>
    <div className="footer_content_bottom_payments">
      <img src={footerImgFifth} alt="Visa" />
      <img src={footerImgSexth} alt="MasterCard" />
      <img src={footerImgSeventh} alt="PayPal" />
    </div>
  </div>
</footer>

        
    </>
  )
}

export default Footer
