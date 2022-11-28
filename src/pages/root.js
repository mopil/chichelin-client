import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

function Root(props) {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default Root;