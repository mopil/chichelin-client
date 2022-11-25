
import React, {useState} from 'react';
import './App.css';
import MainPage from './components/mainPage';
import Layout from './components/layout';
import Header from './components/header';
import UploadChicken from './components/uploadChicken';
import Detailed from './components/detailed';

function App() {

  return (
    <div>
      {/* <MainPage></MainPage> */}
      {/* <UploadChicken></UploadChicken> */}
      <Detailed></Detailed>
      
    </div>
  );
}

export default App;