import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";
import "./Testimonial.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonial = () => {
  AOS.init();
    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,
        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true,
                },
            },
            {
                breakpoint:576,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                   
                },
            },
        ]
    }
  return (
    <Slider {...settings}>
      <div data-aos="fade-up" data-aos-duration="2500" className="testimonial py-4 px-3">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
          deserunt a nesciunt temporibus minima, fugit facere consectetur nihil
          ab voluptatum, harum quos labore, voluptate sint perferendis! Dolore
          doloremque dolorem dignissimos.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
            <div>
            <h5 className="mb-0 mt-3">Billy Butcher</h5>
            <p>Customer</p>
            </div>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-duration="2500" data-aos-delay="50" className="testimonial py-4 px-3">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
          deserunt a nesciunt temporibus minima, fugit facere consectetur nihil
          ab voluptatum, harum quos labore, voluptate sint perferendis! Dolore
          doloremque dolorem dignissimos.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
            <div>
            <h5 className="mb-0 mt-3">Starlight</h5>
            <p>Customer</p>
            </div>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-duration="2500" data-aos-delay="100" className="testimonial py-4 px-3">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
          deserunt a nesciunt temporibus minima, fugit facere consectetur nihil
          ab voluptatum, harum quos labore, voluptate sint perferendis! Dolore
          doloremque dolorem dignissimos.
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
            <div>
            <h5 className="mb-0 mt-3">Homelander</h5>
            <p>Customer</p>
            </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
