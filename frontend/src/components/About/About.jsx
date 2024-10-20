import React,{useEffect} from "react";
import { Col, Row, Container } from "reactstrap";
import Slider from "react-slick";
import img1 from "../../assets/images/world-tour-1.jpg";
import img2 from "../../assets/images/world-tour-2.jpg";
import img3 from "../../assets/images/world-tour-3.jpg";
import img4 from "../../assets/images/world-tour-4.jpg";
import img5 from "../../assets/images/world-tour-5.jpg";
import img6 from "../../assets/images/world-tour-6.jpg";
import mapImg1 from "../../assets/images/Japan.jpg";
import mapImg2 from "../../assets/images/singapore.jpg";
import mapImg3 from "../../assets/images/switzerland.jpg";
import mapImg4 from "../../assets/images/bali.jpg";
import mapImg5 from "../../assets/images/norway.jpg";
import flag1 from "../../assets/images/japan-flag.jpg";
import flag2 from "../../assets/images/brazil-flag.jpg";
import flag3 from "../../assets/images/uae-flag.jpg";
import flag4 from "../../assets/images/uk-flag.jpg";
import flag5 from "../../assets/images/norway-flag.png";
import "./About.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Subtitle from "../../shared/Subtitle";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  AOS.init();
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds between slides
    pauseOnHover: true, // Pause autoplay on hover
  };

  return (
    <>
    
      <section className="about-section">
        <Container>
          <Row>
            <Col>
            <Subtitle subtitle={"About Us"} />
              <p data-aos="slide-left" data-aos-duration="1500" className="about-text mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                ipsa amet saepe atque nam molestiae error tempora, eligendi
                omnis itaque ipsum sint natus voluptas. Aliquid fuga repudiandae
                voluptates ipsam velit. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quas ipsa amet saepe atque nam molestiae error
                tempora, eligendi omnis itaque ipsum sint natus voluptas.
                Aliquid fuga repudiandae voluptates ipsam velit. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Quas ipsa amet
                saepe atque nam molestiae error tempora, eligendi omnis itaque
                ipsum sint natus voluptas. Aliquid fuga repudiandae voluptates
                ipsam velit.
              </p>
            </Col>
            <Col lg="12">
            <Subtitle subtitle={"Travel to the World with Us"} />
              <Slider  className="mb-5" {...sliderSettings}>
                <div data-aos="slide-right" data-aos-duration="1500" className="img-box">
                  <img src={img1} alt="world-tour" />
                </div>
                <div className="img-box">
                  <img src={img2} alt="world-tour" />
                </div>
                <div className="img-box">
                  <img src={img3} alt="world-tour" />
                </div>
                <div className="img-box">
                  <img src={img4} alt="world-tour" />
                </div>
                <div className="img-box">
                  <img src={img5} alt="world-tour" />
                </div>
                <div className="img-box">
                  <img src={img6} alt="world-tour" />
                </div>
              </Slider>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
            <Subtitle subtitle={"Want to experience this."} />
            <h4 className="destination-heading  mt-4 "><i class="ri-compass-3-line"></i> Choose your next destination</h4>
            </Col>
            <Col>
              <div data-aos="slide-up" data-aos-duration="1500" className="all-travels">
                <div  className="img-boxes">
                  <img className="flag" src={flag1} alt="Japan flag" />
                  <img src={mapImg1} alt="Japan" />
                </div>
                <div className="img-boxes">
                  <img className="flag" src={flag2} alt="Singapore flag" />
                  <img src={mapImg2} alt="Singapore" />
                </div>
                <div className="img-boxes">
                  <img className="flag" src={flag3} alt="Switzerland flag" />
                  <img src={mapImg3} alt="Switzerland" />
                </div>
                <div className="img-boxes">
                  <img className="flag" src={flag4} alt="Bali flag" />
                  <img src={mapImg4} alt="Bali" />
                </div>
                <div className="img-boxes">
                  <img className="flag" src={flag5} alt="Norway flag" />
                  <img src={mapImg5} alt="Norway" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
