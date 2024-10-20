import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SearchResultList from "../pages/Searchresultlist";
import TourDetails from "../pages/Tourdetails";
import Tours from "../pages/Tours";
import Thankyou from '../pages/Thankyou';
import About from '../components/About/About';
import Gallery from '../components/Gallery/Gallery';

const Routers = () => {
  return (
    <Routes> 
      <Route path='/' element={<Navigate to='/Home' />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Register' element={<Register />} />
      <Route path='/Thankyou' element={<Thankyou />} />
      <Route path='/Tours/search' element={<SearchResultList />} />
      <Route path='/Tours/:id' element={<TourDetails />} />
      <Route path='/Tours' element={<Tours />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Gallery' element={<Gallery />} />
    </Routes>
  );
}

export default Routers;
