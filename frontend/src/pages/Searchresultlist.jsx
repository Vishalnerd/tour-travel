import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { useLocation } from "react-router-dom";
import Tourcard from "../shared/Tourcard";
import CommonSection from "./../shared/CommonSection";
import Newsletter from "../shared/Newsletter";

const Searchresultlist = () => {
  const location = useLocation();
  const [data] = useState(location.state);
  console.log(data);
  return (
    <>
      <CommonSection title={"Tour Search Result"} />
      <section>
        <Container>
          <Row>
            {data.length===0?<h4 className="text-center">No Tour Found</h4>:data?.map(tour=><Col lg='3' className="mb-4" key={tour._id}>
            <Tourcard tour={tour} /></Col>)}
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default Searchresultlist;
