import React, {useEffect, useState} from 'react';
import '../styles/search.css';
import axios from "axios";
import {useLocation} from "react-router-dom";
import StyledSlider from '../components/SearchSlider';

function Search() {
  const location = useLocation();
  const word = new URLSearchParams(location.search).get('word');

  const [chicken, setChicken] = useState(initialChickenData);

  useEffect(() => {
    axios.get(`/chicken/search?keyword=${word}`)
      .then(res => {
        setChicken(res.data);
        console.log(res.data);
      })
      .catch(console.log)
  }, []);

  return (
    <main className='searchBox'>
      <div id='itemSlider'>
        <StyledSlider/>
      </div>
    </main>
  )
}

export default Search;

const initialChickenData = {
  totalCount: 0,
  curCount: 0,
  totalPage: 0,
  curPage: 0,
  chickens: []
}