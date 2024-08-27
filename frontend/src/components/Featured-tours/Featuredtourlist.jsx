import React from 'react';
import Tourcard from '../../shared/Tourcard';
import { Col, Spinner, Alert } from 'reactstrap';
import useFetch from '../../hooks/useFetch';
import { BASE_URL } from '../../utils/config';

const Featuredtourlist = () => {
  const { data: featuredTours, loading, error } = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);

  if (loading) {
    return <Spinner>Loading...</Spinner>; // Display a spinner while data is loading
  }

  if (error) {
    return <Alert color="danger">{error}</Alert>; // Display an error message if fetching fails
  }

  return (
    <>
      {!loading && !error && featuredTours?.map(tour => (
        <Col lg="3" md='4' sm='6' className='mb-4' key={tour._id}>
          <Tourcard tour={tour} />
        </Col>
      ))}
    </>
  );
}

export default Featuredtourlist;
