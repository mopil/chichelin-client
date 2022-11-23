import './mainPage.css'

import React, {useState} from 'react';
import Header from './header.js'
import SimpleSlider from './slider';
import StyledSlider from './slider';

function MainPage() {

  return (
       <div class='mainPage'>
          <header><Header></Header></header>
          <body>
            <select id='sortBy'>
              <option>정렬 조건 선택</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
            <div id='mainSlider'>
              <StyledSlider></StyledSlider>
            </div>
          </body>
          
       </div>
  );
}

export default MainPage;