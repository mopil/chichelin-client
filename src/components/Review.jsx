import React, {useState} from 'react';
import '../styles/detailed.css';
import axios from "axios";
import {HiOutlinePencilSquare} from "react-icons/hi2";
import {CgClose} from "react-icons/cg"

function Review({reviews, id}) {
  const [reviewInfo, setReviewInfo] = useState(initialReviewInfo);

  const changeValue = (e) => {
    const {name, value} = e.target;
    setReviewInfo(prev => ({...prev, [name]: value}));
  };

  const postReview = (e) => {
    e.preventDefault();
    if (reviewInfo.password.length !== 4) {
      alert('비밀번호를 올바르게 입력해 주세요')
    }
    axios.post(`/chicken/${id}/review`, reviewInfo)
      .then(() => setReviewInfo(initialReviewInfo))
      .catch(console.log)
  };

  const postLikeReview = (chickenId, reviewId) => {
    axios.post(`/chicken/${chickenId}/review/${reviewId}/like`)
      .then(res => console.log(res.data))
      .catch(console.log)
  };

  // 비밀번호 숫자 제한
  const validatePassword = (e) => {
    if (!/^[0-9]+$/.test(e.key) && e.key.length === 1) {
      e.preventDefault();
    }
  };

  return (<>
    <section>
      {reviews.map(item => (<div key={item.id} className='contentBox'>
        <p className='content'>{item.nickname}: {item.content}</p>

        <span className='contentData'>
          <p className='content'>{item.createdAt}</p>
          <span onClick={() => postLikeReview(id, item.id)}>
            <img className='reviewHeart' src='/images/heart.png' alt='좋아요 아아콘'/>
          </span>
          <HiOutlinePencilSquare className='contentIcon'/>
          <CgClose className='contentIcon'/>
        </span>
      </div>))}
    </section>

    <form onSubmit={postReview}>
      <div className='writerInfoBox'>
        <input
          className='writerInfo'
          type='text'
          name='nickname'
          value={reviewInfo.nickname}
          placeholder='닉네임 (2 - 6 글자)'
          onChange={changeValue}
          required
        />

        <input
          className='writerInfo'
          type='password'
          name='password'
          value={reviewInfo.password}
          placeholder='비밀번호 (숫자 4자리)'
          onChange={changeValue}
          onKeyDown={validatePassword}
          maxLength={4}
          required
        />
      </div>

      <div className='reviewInputBox'>
          <textarea
            className='reviewInput'
            name='content'
            value={reviewInfo.content}
            placeholder='리뷰 작성하기'
            onChange={changeValue}
            required
          />
        <button className='registerButton' type='submit'>등록</button>
      </div>
    </form>
  </>);
}

export default Review;

const initialReviewInfo = {nickname: '', password: '', content: ''};