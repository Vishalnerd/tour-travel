import React from "react";
import Servicecard from "./Servicecard";
import { Col } from "reactstrap";
import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Check Weather",
    desc: "lorem ipsumdolor sit",
  },

  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "lorem ipsumdolor sit",
  },

  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "lorem ipsumdolor sit",
  },
];

const Servicelist = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" md='6' sm='12' className="mb-4" key={index}>
          <Servicecard item={item} />
        </Col>
      ))}
    </>
  );
};

export default Servicelist;
