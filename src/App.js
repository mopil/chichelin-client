import './App.css';

import axios from 'axios';
import React from 'react';

import Layout from './components/layout';
import Header from './components/header';
import UploadChicken from './components/uploadChicken';

function App() {

  return (
    <>
      <Header />
      <UploadChicken />
    </>
  );
}

export default App;