import React from 'react';
import CollapseItems from '../components/homePageComponents/CollapseItems/CollapseItems';
import SectionHeader from '../components/SectionHeader';
import SectionIntro from '../components/SectionIntro';
import SectionSubHeader from '../components/SectionSubHeader';
import Navbar from '../components/shared/navbar/Navbar';
import Header from './../components/Header/Header';


const Homepage = () => {
  return (
    <React.Fragment>
    <Navbar />
      <Header />
      <CollapseItems />
      <SectionSubHeader />
      <SectionHeader />
      <SectionIntro />
    </React.Fragment>
  )
}

export default Homepage