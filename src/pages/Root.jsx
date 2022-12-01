import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Root(props) {
  return (
    <div style={{ backgroundColor: '#FFF5E2', minHeight: '100vh', display: 'flex',
      flexDirection: 'column', justifyContent: 'space-between' }}>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default Root;