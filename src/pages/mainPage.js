import React, {useEffect, useState} from 'react';
import '../styles/mainPage.css'
import axios from "axios";
import baseUrl from "../api/api";
import SimpleSlider from '../slider';
import {AiTwotoneLike} from "react-icons/ai";
import ChickenCard from "../components/chickenCard";

function MainPage() {
  const [recommend, setRecommend] = useState(initialRecommendChicken);
  const [ranking, setRanking] = useState([]);
  const [chicken, setChicken] = useState(initialChicken);
  let today = new Date();
  const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];

  useEffect(() => {
    axios.get(`/chicken/recommend`)
      .then(res => setRecommend(res.data))
      .catch(console.log)

    axios.get(`/chicken/ranking`)
      .then(res => {
        setRanking(res.data.ranking)
        console.log(res.data.ranking)
      })
      .catch(console.log)

    axios.get(`/chicken/list?page=0`)
      .then(res => setChicken(res.data))
      .catch(console.log)
  }, []);

  return (
    <main className='mainPage'>
      {/*
      <select className='sortBy'>
        <option>정렬 조건 선택</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>
      */}

      <section className='chicken'>
        <section className='chickenContainer'>
          <div className='weeklyIconBox'>
            <AiTwotoneLike className='weeklyIcon'/>
            <p className='weeklyTitle'>금주의 치킨</p>
          </div>

          <div className='weeklyImageBox'>
            <img src={`${baseUrl}/chicken/image/${recommend.imageServerFilename}`} alt={recommend.name}/>
          </div>

          <div className='weeklyDescBox'>
            <h2>{recommend.name}</h2>
            <p className='weeklyDesc'>오늘은 {WEEKDAY[today.getDay()]}요일! 스트레스를 사악 날릴 {recommend.name} 어떠신가요~~~!!</p>
          </div>
        </section>

        <section className='chickenContainer'>
          {ranking.map(item => <ChickenCard key={item.id} chicken={item}/>)}
        </section>
      </section>

      <section className='mainSlider'>
        <SimpleSlider/>
      </section>

    </main>
  );
}

export default MainPage;

const initialRecommendChicken = {
  id: 0,
  name: '',
  imageServerFilename: '',
  price: 0,
  spicy: 0,
  brand: '',
  likes: 0,
  reviews: []
}

const initialChicken = {
  totalCount: 0,
  curCount: 0,
  totalPage: 0,
  curPage: 0,
  chickens: []
}