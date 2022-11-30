import React, {useEffect} from 'react';
import '../styles/search.css';
import axios from "axios";
import {useLocation} from "react-router-dom";
import StyledSlider from '../components/SearchSlider';

function Search() {
  const location = useLocation();
  const word = new URLSearchParams(location.search).get('word');

  useEffect(() => {
    axios.get(`/chicken/search?keyword=${word}`)
      .then(res => console.log(res.data))
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