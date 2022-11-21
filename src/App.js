import './App.css';

import axios from 'axios';
import React, {useState} from 'react';


import Layout from './layout.js'
import Header from './header.js'
import UploadChicken from './uploadChicken.js'


function App() {

  return (
    <div>
      <Header></Header>
      <UploadChicken></UploadChicken>
    </div>
    
  );
}

export default App;