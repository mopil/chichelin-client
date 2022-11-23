import React, { useState } from 'react';
import '../styles/uploadChicken.css'
import axios from 'axios';
import Layout from './layout.js';
import Header from './header.js';

function UploadChicken() {
  const [chickenData, setChickenData] = useState(initialChickenData);

  /** 치킨 정보 변경 함수 */
  const changeValue = (e) => {
    const { name, value } = e.target;
    setChickenData(prev => ({ ...prev, [name]: value }));
  };

  /** 치킨 이미지 선택 함수 */
  const getImage = (e) => {
    URL.revokeObjectURL(chickenData.image.url);
    setChickenData(prev => ({ ...prev, image: { file: e.target.files[0], url: URL.createObjectURL(e.target.files[0]) } }));
  };

  /** 치킨 정보 등록 함수 */
  const postChicken = () => {
    const formData = new FormData();
    formData.append('chickenName', chickenData.chickenName);
    formData.append('image', chickenData.image.file);
    formData.append('price', parseInt(chickenData.price));
    formData.append('spicy', chickenData.spicy);
    formData.append('brand', chickenData.brand);

    axios.post('/chicken', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(res => {
        console.log(res);
        alert('등록되었습니다.');
        setChickenData(initialChickenData);
      })
      .catch(error => {
        console.error(error);
        alert('등록할 수 없습니다.');
      })
  };

  return (
    <div>
      <header className="App-header"><div id='topBar'></div></header>
      <body>
        <div id='divLeft'>
          <img src='/images/balloon.png' id='balloon' alt='balloon'></img>
          <br></br>
          <img src='/images/chicken.png' id='chicken' alt='chicken'></img>
        </div>

        <div id='divRight'>
          <input type='text' id='input1' placeholder='치킨 이름' value={chickenData.chickenName} name='chickenName' onChange={changeValue} />
          <input type='text' id='input2' placeholder='가격' value={chickenData.price} name='price' onChange={changeValue} />

          <select id='select1' value={chickenData.brand} name='brand' onChange={changeValue}>
            <option value=''>가게 이름</option>
            {store.map(item => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>

          <select id='select2' value={chickenData.spicy} name='spicy' onChange={changeValue}>
            <option value=''>매운 정도</option>
            {spicyLevel.map(item => (
              <option key={item.id} value={item.id}>{item.level}</option>
            ))}
          </select>

          <br />
          <br />
          <br />
          <form type="submit">
            <div id="callButton">
              <label htmlFor="callFile">
                {
                  !chickenData.image.url ?
                    <img src='/images/upload2.png' alt='button' /> :
                    <img src={chickenData.image.url} alt='치킨 이미지' />
                }
              </label>
              <input type="file" id="callFile" accept="image/*" onChange={getImage} onClick={e => e.target.value = null} />
            </div>
          </form>

          <br />
          <br />
          <br />

          <button id='submitBtn' onClick={postChicken}>등록</button>
        </div>
      </body>
      <Header></Header>
    </div>

  );
}

export default UploadChicken;

const store = ['굽네', '교촌', 'BBQ', 'BHC', '푸라닭', '60계', '네네치킨', '호식이', '두마리', '노랑통닭', '처갓집'];
const spicyLevel = [{ id: 0, level: '0단계' }, { id: 1, level: '1단계' }, { id: 2, level: '2단계' }, { id: 3, level: '3단계' }, { id: 4, level: '4단계' }];
const initialChickenData = {
  chickenName: '',
  image: { file: '', url: '' },
  price: '',
  spicy: '',
  brand: ''
}