import React from 'react';
import Services from '../components/homePageComponents/Services';
import Navbar from '../components/shared/navbar/Navbar';
import Header from './../components/Header/Header';


const Homepage = () => {
  return (
    <React.Fragment>
     
     
    <Navbar />
      <Header />     
      <Services />
    </React.Fragment>
  )
}

export default Homepage