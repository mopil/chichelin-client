import React, {useEffect, useState} from 'react';
import '../styles/mainPage.css'
import axios from "axios";
import {useNavigate} from "react-router-dom";
import baseUrl from "../api/api";
import {AiTwotoneLike} from "react-icons/ai";
import ChickenCard from "../components/ChickenCard";
import ChickenSlider from "../components/ChickenSlider";

function MainPage() {
  const navigate = useNavigate();

  const [recommend, setRecommend] = useState(initialRecommendChicken);
  const [ranking, setRanking] = useState([]);
  const [chicken, setChicken] = useState([]);
  let today = new Date();
  const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];

  useEffect(() => {
    axios.get(`/chicken/recommend`)
      .then(res => setRecommend(res.data))
      .catch(console.log)

    axios.get(`/chicken/ranking`)
      .then(res => setRanking(res.data.ranking))
      .catch(console.log)

    axios.get(`/chicken/list?page=0`)
      .then(res => setChicken(res.data.chickens))
      .catch(console.log)
  }, []);

  const openDetail = (chickenId) => {
    navigate(`/detail?id=${chickenId}`);
  };

  return (
    <>
      <section className='chicken'>
        <section className='chickenContainer weekly' onClick={()=>openDetail(recommend.id)}>
          <div className='weeklyIconBox'>
            <AiTwotoneLike className='weeklyIcon'/>
            <p className='weeklyTitle'>금주의 치킨</p>
          </div>

          <div className='weeklyImageBox'>
            <img src={`${baseUrl}/chicken/image/${recommend.imageServerFilename}`} alt={recommend.name}/>
          </div>

          <div className='weeklyDescBox'>
            <h2 className='weeklyChickenName'>{recommend.name}</h2>
            <p className='weeklyDesc'>오늘은 {WEEKDAY[today.getDay()]}요일!</p>
            <p className='weeklyDesc'>스트레스를 사악 날릴 {recommend.name} 어떠신가요~~~!!</p>
          </div>
        </section>

        <section className='chickenContainer'>
          {ranking.map(item => <ChickenCard key={item.id} chicken={item} onClick={openDetail}/>)}
        </section>
      </section>

      <section className='mainSlider'>
        <ChickenSlider chickens={chicken} row={1} showLength={4} dots={false}/>
      </section>
    </>
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