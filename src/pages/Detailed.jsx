import '../styles/detailed.css';
import React, {useEffect, useState} from 'react';
import axios from "axios";
import baseUrl from "../api/api";
import {useLocation} from "react-router-dom";
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";
import Review from "../components/Review";

function Detailed() {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get('id');

  const [detail, setDetail] = useState(initialChickenDetail);

  useEffect(() => {
    axios.get(`/chicken/${id}`)
      .then(res => {
        setDetail(res.data)
        console.log(res.data)
      })
      .catch(console.error)
  }, []);

  const spicyLevel = () => {
    let level = [];
    for (let i = 0; i < detail.spicy; i++) level.push(i)
    return level;
  };

  return (
    <main className='main'>
      <section className='detail'>
        <section className='detailTitle'>
          <p className='rank'>3위</p>

          <div className='titleBox'>
            <p className='chickenName'>
              <FaQuoteLeft className='quoteIconLeft'/>
              {detail.name}
              <FaQuoteRight className='quoteIconRight'/>
            </p>
          </div>
        </section>

        <section className='detailData'>
          <div className='chickenImageBox'>
            <img className='chickenImage' src={`${baseUrl}/chicken/image/${detail.imageServerFilename}`} alt={detail.name}/>
          </div>

          <div className='chickenData'>
            <p className='brand'>{detail.brand}</p>
            <p className='price'>{detail.price}</p>

            <span className='spicyLevelBox'>
              {spicyLevel().map(_ => <img src='/images/spicy.png' alt='spicy' style={{width: '2.5rem'}}/>)}
            </span>

            <span className='likedBox'>
              <img src='/images/heart.png' className='heart'></img>
              <p className='count'>{detail.likes}</p>
            </span>
          </div>
        </section>
      </section>

      <br/>

      <hr className="hr"></hr>

      <p className='review'>Reviews</p>
      <Review reviews={detail.reviews} id={id}/>
    </main>
  );
}

export default Detailed;

const initialChickenDetail = {
  brand: '',
  id: 0,
  imageServerFilename: '',
  likes: 0,
  name: '',
  price: 0,
  reviews: [],
  spicy: 0
}