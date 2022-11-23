import './App.css';

// import axios from 'axios';
import React, {useState} from 'react';


import Layout from './layout.js'
import Header from './header.js'
import UploadChicken from './uploadChicken.js'
import MainPage from './mainPage';


function App() {

  return (
    <div>
      <MainPage></MainPage>
      {/* <UploadChicken></UploadChicken> */}
    </div>
  );
}

export default App;