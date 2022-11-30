import React, {useState} from 'react';
import '../styles/detailed.css';
import axios from "axios";

function Review({reviews, id}) {
  const [reviewInfo, setReviewInfo] = useState({nickname: '', password: '', content: ''});

  const changeValue = (e) => {
    const {name, value} = e.target;
    setReviewInfo(prev => ({...prev, [name]: value}));
  };

  const postReview  = (e) => {
    e.preventDefault();
    axios.post(`/chicken/${id}/review`, reviewInfo)
      .then(res => console.log(res.data))
      .catch(console.log)
  };

  return (
    <section>
      <div className='content'>
        {reviews.map(item => (
          <>
            <p>{item.nickname}: {item.content}</p>
            <p className='date'>{item.createdAt}</p>
          </>
        ))}

      </div>

      <form onSubmit={postReview}>
        <div>
          <label>닉네임(2-6 글자): </label>
          <input
            className='nickName'
            type='text'
            name='nickname'
            value={reviewInfo.nickname}
            placeholder='닉네임'
            onChange={changeValue}
            required
          />

          <label>비밀번호(4자리): </label>
          <input
            className='passwd'
            type='password'
            name='password'
            value={reviewInfo.password}
            placeholder='비밀번호'
            onChange={changeValue}
            required
          />
        </div>

        <div>
          <textarea
            className='review_register'
            name='content'
            value={reviewInfo.content}
            placeholder='리뷰 달기'
            onChange={changeValue}
            required
          />
          <button className='register' type='submit'>등록</button>
        </div>
      </form>
    </section>
  );
}

export default Review;