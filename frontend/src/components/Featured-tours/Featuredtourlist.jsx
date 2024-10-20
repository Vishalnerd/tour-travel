import React from 'react';
import Tourcard from '../../shared/Tourcard';
import { Col, Alert } from 'reactstrap';
import useFetch from '../../hooks/useFetch';
import { BASE_URL } from '../../utils/config';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Featuredtourlist = () => {
  const { data: featuredTours, loading, error } = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);

  if (loading) {
    // Display skeleton loaders while data is loading
    return (
      <>
        {[...Array(8)].map((_, index) => (
          <Col lg="3" md="4" sm="6" className="mb-4" key={index}>
            <Skeleton height={300} /> {/* Adjust the height as needed */}
            <Skeleton height={20} width={`80%`} style={{ marginTop: '10px' }} />
            <Skeleton height={20} width={`60%`} style={{ marginTop: '5px' }} />
            <Skeleton height={20} width={`70%`} style={{ marginTop: '5px' }} />
          </Col>
        ))}
      </>
    );
  }

  if (error) {
    return <Alert color="danger">{error}</Alert>; // Display an error message if fetching fails
  }

  return (
    <>
      {featuredTours?.map((tour) => (
        <Col lg="3" md="4" sm="6" className="mb-4" key={tour._id}>
          <Tourcard tour={tour} />
        </Col>
      ))}
    </>
  );
};

export default Featuredtourlist;
