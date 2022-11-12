import React from 'react';
import Card from '../components/Cards/Card';
import Services from '../components/homePageComponents/Services';
import Header from './../components/Header/Header';
import CollapseItems from './../components/homePageComponents/CollapseItems/CollapseItems';
import Navbar from './../components/shared/navbar/Navbar';


const Homepage = () => {
  return (
    <React.Fragment>
    <Navbar />
    <Header />
    <CollapseItems />     
      <Services />
      <Card></Card>
    </React.Fragment>
    
  )
}

export default Homepage