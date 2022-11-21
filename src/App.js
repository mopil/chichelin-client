import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, {useState} from 'react';

function App() {
  // axios.get('https://2c64-117-17-163-34.jp.ngrok.io/chicken/image/chicken.jpg')
  // .then(res => { 
  //     setTestImage(res.data);
  //     console.log(res.data);
  //     console.log(testImage);
  //   }
  // )

  axios.get('https://2c64-117-17-163-34.jp.ngrok.io/chicken/list?page=0')
  .then(res => {
    console.log(res.data)
  })

  // const [testImage, setTestImage] = useState();

  return (
    <div>
      <header className="App-header"><div id='topBar'></div></header>
      <body>
        <div id='divLeft'>
          <img src={testImage} id='balloon'></img>
          <br></br>
          <img src='chicken.png' id='chicken'></img>
        </div>
        <div id='divRight'>
          <input type='text' id='input1' placeholder='치킨 이름'></input>
          <input type='text' id='input2' placeholder='가격'></input>
          <select id='select1'>
            <option selected>가게 이름</option>
            <option>굽네</option>
            <option>교촌</option>
            <option>BBQ</option>
            <option>BHC</option>
            <option>푸라닭</option>
            <option>60계</option>
            <option>네네치킨</option>
            <option>호식이 두마리</option>
            <option>노랑통닭</option>
            <option>처갓집</option>
          </select>
          <select id='select2'>
            <option>매운 정도</option>
            <option>0단계</option>
            <option>1단계</option>
            <option>2단계</option>
            <option>3단계</option>
            <option>4단계</option>
          </select>
          <br></br>
          <br></br>
          <br></br>
          <form method="post" enctype="multipart/form-data">
            <div id="callButton">
              <label for="callFile">
                <img src='upload2.png'></img>
              </label>
            <input type="file" id="callFile" name="callFile" accept="image/*" onchange="loadFile(this)"></input>
            </div>
          </form>
          <br></br>
          <br></br>
          <br></br>
          <button id='submitBtn'>등록</button>
        </div>
      </body>
    </div>
  );
}

export default App;