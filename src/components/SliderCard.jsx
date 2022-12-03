import React from 'react';
import '../styles/search.css';
import baseUrl from "../api/api";
import {useNavigate} from "react-router-dom";

function SliderCard({chicken}) {
  const navigate = useNavigate();

  const openDetail = (chickenId) => {
    navigate(`/detail?id=${chickenId}`);
  };

  return (
    <button className='sliderButton' onClick={() => openDetail(chicken.id)}>
      <div className='imgBox'>
        <img src={`${baseUrl}/chicken/image/${chicken.imageServerFilename}`} alt={chicken.name} width='100%'
             height='100%'/>
      </div>

      <div className='infoBox'>
        <ul className='sliderInfo'>
          <li>{chicken.name}</li>
          <li>{chicken.price}</li>
        </ul>

        <ul className='sliderInfo'>
          <li>{chicken.brand}</li>
          <li>❤ {chicken.likes}</li>
        </ul>
      </div>
    </button>
  );
}

export default SliderCard;