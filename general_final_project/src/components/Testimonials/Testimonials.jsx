import React, { useRef } from 'react';
import "./Testimonials.scss";

import LeftArrow from "../../assets/Testimonials_first_icon.svg";   
import RightArrow from "../../assets/Testimonaials_second_icon.svg"; 
import Stars from "../../assets/testimonials_stars.svg"

const testimonialsData = [
  {
    name: "Sarah M.",
    comment: `I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.`,
  },
  {
    name: "Alex K.",
    comment: `Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable.`,
  },
  {
    name: "James L.",
    comment: `As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is diverse and on-trend.`,
  },
  {
    name: "Luna B.",
    comment: `Shop.co has transformed my wardrobe! The experience is seamless and the pieces are stylish, comfortable, and affordable.`,
  },
  {
    name: "Mike D.",
    comment: `Great styles and fast delivery. I'm already planning my next purchase. Highly recommend!`,
  },

   {
    name: "Mike D.",
    comment: `Great styles and fast delivery. I'm already planning my next purchase. Highly recommend!`,
  },

   {
    name: "Mike D.",
    comment: `Great styles and fast delivery. I'm already planning my next purchase. Highly recommend!`,
  },

   {
    name: "Mike D.",
    comment: `Great styles and fast delivery. I'm already planning my next purchase. Highly recommend!`,
  },

   {
    name: "Mike D.",
    comment: `Great styles and fast delivery. I'm already planning my next purchase. Highly recommend!`,
  },

];

const Testimonials = () => {
  const scrollRef = useRef(null);  //scrollRef: sürüşən konteyneri göstərir.  useRef ilə DOM elementi tuturug.



  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 415; 
    if (container) {
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };  //İstiqamətə görə (left və ya right) kartları yana sürüşdürür.

// scrollBy: müəyyən qədər sola və ya sağa aparır.

  return (
    <section className='testimonials_section'>
      <div className='testimonials_section_header'>
        <h2 className='testimonials_section_title'>OUR HAPPY CUSTOMERS</h2>
        <div className='testimonials_section_arrows'>
          <img onClick={() => scroll("left")} src={LeftArrow} alt="" />  
          <img onClick={() => scroll("right")} src={RightArrow} alt="" />  
          
        </div>
      </div>

      <div className='testimonials_scroll_container' ref={scrollRef}> 
        {testimonialsData.map((item, index) => (
          <div className='testimonial_card' key={index}>
            <img src={Stars} alt="stars" className='testimonial_stars' />
            <h3 className='testimonial_name'>{item.name}</h3>
            <p className='testimonial_text'>“{item.comment}”</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
