import React, {useEffect, useState} from 'react';
import '../styles/search.css';
import axios from "axios";
import {useLocation} from "react-router-dom";
import SearchSlider from '../components/SearchSlider';

function Search() {
  const location = useLocation();
  const word = new URLSearchParams(location.search).get('word');

  const [chicken, setChicken] = useState([]);

  useEffect(() => {
    axios.get(`/chicken/search?keyword=${word}`)
      .then(res => {
        setChicken(res.data.chickens)
        console.log(res.data)
      })
      .catch(console.log)
  }, [word]);

  return (
    <main className='searchBox'>
      <div className='itemSlider'>
        <SearchSlider chickens={chicken}/>
      </div>
    </main>
  )
}

export default Search;