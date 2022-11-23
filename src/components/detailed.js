// import logo from './logo.svg';
import '../styles/detailed.css';
import '../App.css';

function Detailed() {
  return (
    <div className='App'>
      <header className='App-header'>
      </header>
      <body>
        <div className='detail'>
          <p id='rank'>3위</p>
          <p id='chickenName'>"고추바사삭"</p>
          <img src='.'></img>
          <p id='brand'>굽네치킨</p>
          <p id='price'>18000원</p>
          <img src=''></img>
          <img src=''></img>
          <img src=''></img>
          <p id='count'>1025</p>
        </div>
        <hr></hr>
        <p id='review'>Reviews</p>
        <div id='content'>
        <p>심은지: 굿 맛 매콤해서 스트레스 받을 때 먹으면 스트레스가 쏴악~~~</p>
        <p id='date'>2022-11-12 12:33:44</p>
        </div>
        <div id='nickName'>닉네임 입력</div>
        <div id='passwd'>비밀번호(1234)</div>
        <p><textarea id='review_register'>리뷰 달기</textarea></p>
        <button id='register'>등록</button>
      </body>
    </div>
  );
}

export default Detailed;
