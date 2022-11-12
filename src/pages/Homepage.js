import React from 'react';
import Card from '../components/Cards/Card';
import Services from '../components/homePageComponents/Services';
import Layout from '../components/Layout';
import Header from './../components/Header/Header';
import CollapseItems from './../components/homePageComponents/CollapseItems/CollapseItems';



const Homepage = () => {
  return (
    <Layout >
      <Header />
      <CollapseItems />
      <Services />
      <Card />
    
    </Layout>
    
  )
}

export default Homepage

