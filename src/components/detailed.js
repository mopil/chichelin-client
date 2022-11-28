// import logo from './logo.svg';
import '../styles/detailed.css';
import React from 'react'
import Header from './header.js';
import '../App.css';

function Detailed() {
  return (
    <div>
      <header><Header></Header>
      </header>
      <body id="body">
        <div className='detail'>
          <p id='rank'>3위</p>
          <p id='chickenName'>"고추바사삭"</p>
          <img src='/images/spicyBasasack.png' id='spicyBasasack'></img>
          <p id='brand'>굽네치킨</p>
          <p id='price'>18000원</p>
          <img src='/images/spicy.png' id='spicy'></img>
          <img src='/images/heart.png' id='heart'></img>
          <p id='count'>1025</p>
        </div><br></br>
        <hr id="hr"></hr>
        <p id='review'>Reviews</p>
        <div id='content'>
        <p>심은지: 굿 맛 매콤해서 스트레스 받을 때 먹으면 스트레스가 쏴악~~~</p>
        <p id='date'>2022-11-12 12:33:44</p>
        </div>
        <form action='#'>
        <label>닉네임(2-6 글자): </label>
        <input type='text' value='닉네임' id='nickName' required></input>
        <label>비밀번호(4 글자): </label>
        <input type='password' value='비밀번호' id='passwd' required></input>
        </form>
        <p><textarea id='review_register' placeholder='리뷰 달기'></textarea></p>
        <button id='register' type='submit'>등록</button>
      </body>
    </div>
  );
}

export default Detailed;
