import React, { useEffect, useRef, useState } from "react";
import "./Gallery.css";
import Slider from "react-slick"; 
import mountain1 from "./Gallery-images/mountain-1.jpg";
import mountain2 from "./Gallery-images/mountain-2.jpg";
import mountain3 from "./Gallery-images/mountain-3.jpg";
import mountain4 from "./Gallery-images/mountain-4.jpg";
import mountain5 from "./Gallery-images/mountain-5.jpg";
import beach1 from "./Gallery-images/beach-1.jpg";
import beach2 from "./Gallery-images/beach-2.jpg";
import beach3 from "./Gallery-images/beach-3.jpg";
import beach4 from "./Gallery-images/beach-4.jpg";
import beach5 from "./Gallery-images/beach-5.jpg";
import countryside1 from "./Gallery-images/countryside-1.jpg";
import countryside2 from "./Gallery-images/countryside-2.jpg";
import countryside3 from "./Gallery-images/countryside-3.jpg";
import countryside4 from "./Gallery-images/countryside-4.jpg";
import countryside5 from "./Gallery-images/countryside-5.jpg";
import city1 from "./Gallery-images/city-1.jpg";
import city2 from "./Gallery-images/city-2.jpg";
import city3 from "./Gallery-images/city-3.jpg";
import city4 from "./Gallery-images/city-4.jpg";
import city5 from "./Gallery-images/city-5.jpg";
import { Container, Row, Col } from "reactstrap";
import { useInView } from 'react-intersection-observer';

const Gallery = () => {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });

  const [sliderSettings, setSliderSettings] = useState(null);

 
  useEffect(() => {
    if (inView) {
      setSliderSettings({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
    }
  }, [inView]);

 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="gallery-section" ref={sectionRef}>
      <Container>
        <Row>
          <Col lg="12">
            <h2 className="gallery-heading">Mountains</h2>
            {sliderSettings && (
              <Slider className="mb-5" {...sliderSettings}>
                {[mountain1, mountain2, mountain3, mountain4, mountain5].map((image, index) => (
                  <div key={index} className="image-box">
                    <img src={image} alt={`mountain-${index + 1}`} />
                  </div>
                ))}
              </Slider>
            )}
          </Col>

          <Col lg="12">
            <h2 className="gallery-heading">Beaches</h2>
            {sliderSettings && (
              <Slider className="mb-5" {...sliderSettings}>
                {[beach1, beach2, beach3, beach4, beach5].map((image, index) => (
                  <div key={index} className="image-box">
                    <img src={image} alt={`beach-${index + 1}`} />
                  </div>
                ))}
              </Slider>
            )}
          </Col>

          <Col lg="12">
            <h2 className="gallery-heading">Countryside</h2>
            {sliderSettings && (
              <Slider className="mb-5" {...sliderSettings}>
                {[countryside1, countryside2, countryside3, countryside4, countryside5].map((image, index) => (
                  <div key={index} className="image-box">
                    <img src={image} alt={`countryside-${index + 1}`} />
                  </div>
                ))}
              </Slider>
            )}
          </Col>

          <Col lg="12">
            <h2 className="gallery-heading">City</h2>
            {sliderSettings && (
              <Slider className="mb-5" {...sliderSettings}>
                {[city1, city2, city3, city4, city5].map((image, index) => (
                  <div key={index} className="image-box">
                    <img src={image} alt={`city-${index + 1}`} />
                  </div>
                ))}
              </Slider>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Gallery;
