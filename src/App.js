import './App.css';

// import axios from 'axios';
import React, {useState} from 'react';


import Layout from './layout.js'
import Header from './header.js'
import UploadChicken from './uploadChicken.js'
import MainPage from './mainPage';

import Layout from './components/layout';
import Header from './components/header';
import UploadChicken from './components/uploadChicken';

function App() {

  return (
    <div>
      <MainPage></MainPage>
      <UploadChicken></UploadChicken>
    </div>
  );
}

export default App;