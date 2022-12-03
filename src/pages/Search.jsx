import React, {useEffect, useState} from 'react';
import '../styles/search.css';
import axios from "axios";
import {useLocation} from "react-router-dom";
import ChickenSlider from '../components/ChickenSlider';

function Search() {
  const location = useLocation();
  const word = new URLSearchParams(location.search).get('word');

  const [chicken, setChicken] = useState([]);
  const [row, setRow] = useState(1);

  useEffect(() => {
    axios.get(`/chicken/search?keyword=${word}`)
      .then(res => {
        res.data.chickens.length < 5 ? setRow(1) : setRow(2);
        setChicken(res.data.chickens);
      })
      .catch(console.log)
  }, [word]);

  return (
    <main className='searchBox'>
      {chicken.length > 0 ?
        <div className='itemSlider'>
          <ChickenSlider chickens={chicken} row={row} dots={true} showLength={row === 1 ? chicken.length : 4}/>
        </div> :
        <p>"{word}" 이(가) 존재하지 않습니다.</p>
      }
    </main>
  )
}

export default Search;