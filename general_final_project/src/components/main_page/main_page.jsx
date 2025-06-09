import React, { useRef } from 'react';
import './main_page.scss';

import mainFirstImg from '../../assets/images/main_first_img.jpg';
import mainSecondImg from '../../assets/main_second_img.svg';
import mainThridImg from '../../assets/main_third_img.svg';
import mainFourthImg from '../../assets/main_fourth_img.svg';
import mainFifthImg from '../../assets/main_fifth_img.svg';
import mainSixthImg from '../../assets/main_sixth_img.svg';

import NewArrivals from '../NewArrivals/NewArrivals';
import TopSelling from '../TopSelling/TopSelling';
import DressStyleBrowser from '../DressStyleBrowser/DressStyleBrowser';
import Testimonials from '../Testimonials/Testimonials';
import Footer from '../Footer/Footer';

const Main_page = () => {



  return (
    <>

      <main className="main">
        <section className="main_section">
          <div className="main_section_left">
            <h2 className="main_section_left_title">
              FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
            </h2>
            <p className="main_section_left_note">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense of style.
            </p>
            <button className="main_section_left_btn">Shop Now</button>

            {/* <div>
              <div></div>
              <div></div>
              <div></div>
            </div> */}
          </div>

          <div className="main_section_right">
            <img
              className="main_section_right_img"
              src={mainFirstImg}
              alt="main section visual"
            />
          </div>
        </section>

        <div className="main_all_brand">
          <img src={mainSecondImg} alt="Versace" className="main_all_brand_versace" />
          <img src={mainThridImg} alt="Zara" className="main_all_brand_zara" />
          <img src={mainFourthImg} alt="Gucci" className="main_all_brand_gucci" />
          <img src={mainFifthImg} alt="Prada" className="main_all_brand_prada" />
          <img src={mainSixthImg} alt="Calvin Klein" className="main_all_brand_calvin_klein" />
        </div>
      </main>

      <div >
        <NewArrivals />
      </div>
        <TopSelling />
        <DressStyleBrowser />
        <Testimonials />
        <Footer />
    </>
  );
};

export default Main_page;
