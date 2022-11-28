import React, {useState} from 'react';
import './App.css';
import MainPage from './components/mainPage';
import Layout from './components/layout';
import Header from './components/header';
import UploadChicken from './components/uploadChicken';
import Detailed from './components/detailed';
import Search from './components/search';

function App() {

  return (
    <div>
      {/* <MainPage></MainPage> */}
      {/* <UploadChicken></UploadChicken> */}
      {/* <Detailed></Detailed> */}
      <Search></Search>
    </div>
  );
}

export default App;