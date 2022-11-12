
import React from 'react';
import Footer from './shared/Footer/Footer';
import Navbar from './shared/navbar/Navbar';



const Layout = ({children}) => {
  return (
    <React.Fragment>
    <Navbar />   
    {children}
    <p> footer</p> 
    <Footer />
    </React.Fragment>
  )
}

export default Layout