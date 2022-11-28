import '../styles/mainPage.css'

import React from 'react';
import Header from './header.js'
import SimpleSlider from '../slider';

function MainPage() {
  return (
       <div class='mainPage'>
          <Header/>
          <body>
          {/*
            <select id='sortBy'>
              <option>정렬 조건 선택</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
            */}
            <div id='weeklyChickenBox'>
              
            </div>
            <div id='rankingBox'>
              
            </div>
            <div id='mainSlider'>
              <SimpleSlider></SimpleSlider>
            </div>
          </body>
          
       </div>
  );
}

export default MainPage;