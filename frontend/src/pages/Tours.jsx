import React, { useState, useEffect } from "react";
import CommonSection from "../shared/CommonSection";
import "../styles/Tours.css";
import Tourcard from "../shared/Tourcard";
import Searchbar from "../shared/Searchbar";
import Newsletter from "../shared/Newsletter";
import { Container, Row, Col } from "reactstrap";

import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Tours() {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const { data: tours, loading, error } = useFetch(`${BASE_URL}/tours?page=${page}`);
  const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`);

  useEffect(() => {
    if (tourCount) {
      const pages = Math.ceil(tourCount / 8);
      setPageCount(pages);
      window.scrollTo(0, 0);
    }
  }, [tourCount]);

  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <>
      <CommonSection title={"All Tours"} />
      <section>
        <Container>
          <Row>
            <Searchbar />
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          {loading && (
            <Row>
              {[...Array(8)].map((_, index) => (
                <Col lg="3" md="6" sm="6" className="mb-4" key={index}>
                  <Skeleton height={300} /> {/* Skeleton for the card image */}
                  <Skeleton height={20} width="80%" style={{ marginTop: '10px' }} /> {/* Skeleton for the title */}
                  <Skeleton height={20} width="60%" style={{ marginTop: '5px' }} /> {/* Skeleton for the subtitle */}
                  <Skeleton height={20} width="70%" style={{ marginTop: '5px' }} /> {/* Skeleton for price/other details */}
                </Col>
              ))}
            </Row>
          )}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              {tours?.slice(page * 8, (page + 1) * 8).map((tour) => (
                <Col lg="3" md="6" sm="6" className="mb-4" key={tour._id}>
                  <Tourcard tour={tour} />
                </Col>
              ))}
              <Col lg="12">
                <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                  {[...Array(pageCount).keys()].map((number) => (
                    <span
                      key={number}
                      onClick={() => handlePageClick(number)}
                      className={number === page ? "active" : ""}
                      style={{ cursor: "pointer" }}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <Newsletter />
    </>
  );
}

export default Tours;
