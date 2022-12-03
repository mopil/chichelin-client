import React, {useState} from 'react';
import '../styles/detailed.css';
import axios from "axios";
import {HiOutlinePencilSquare} from "react-icons/hi2";
import {CgClose} from "react-icons/cg"

function Review({reviews, setDetail, id}) {
  const [reviewInfo, setReviewInfo] = useState(initialReviewInfo);
  const [curReview, setCurReview] = useState({chickenId: 0, reviewId: 0});
  const [modifyReviewData, setModifyReviewData] = useState({nickname: '', password: '', content: ''});
  const [open, setOpen] = useState(false);
  const [buttonName, setButtonName] = useState('등록');

  const changeValue = (e) => {
    const {name, value} = e.target;
    setReviewInfo(prev => ({...prev, [name]: value}));
  };

  const changeModifyValue = (e) => {
    const {name, value} = e.target;
    setModifyReviewData(prev => ({...prev, [name]: value}));
  };

  /* 리뷰 작성 함수 */
  const postReview = (e) => {
    e.preventDefault();
    if (reviewInfo.password.length !== 4) {
      alert('비밀번호를 올바르게 입력해 주세요')
    }
    axios.post(`/chicken/${id}/review`, reviewInfo)
      .then(res => {
        setDetail(res.data);
        setReviewInfo(initialReviewInfo);
      })
      .catch(console.log)
  };

  /* 리뷰 좋아요 등록 함수 */
  const postLikeReview = (chickenId, reviewId) => {
    axios.post(`/chicken/${chickenId}/review/${reviewId}/like`)
      .then(() => alert('좋아요가 등록되었습니다.'))
      .catch(console.log)
  };

  /* 리뷰 수정 함수*/
  const modifyReview = (chickenId, reviewId, nickname, password, content) => {
    setCurReview({chickenId, reviewId});
    setReviewInfo({nickname, password, content});
    setButtonName('수정');
  };

  /* 리뷰 수정 요청 함수 */
  const putReview = (e) => {
    e.preventDefault();
    axios.put(`/chicken/${curReview.chickenId}/review/${curReview.reviewId}`, reviewInfo)
      .then(res => {
        setDetail(res.data);
        setButtonName('등록');
        setReviewInfo(initialReviewInfo);
      })
      .catch(console.log)
  };

  /* 리뷰 삭제 modal */
  const openDelete = (chickenId, reviewId, review) => {
    setOpen(true);
    setCurReview({chickenId, reviewId});
    setReviewInfo({nickname: review.nickname, password: review.password, content: review.content});
  };

  /* 리뷰 삭제 함수 */
  const deleteReview = (e) => {
    e.preventDefault();
    axios.delete(`/chicken/${curReview.chickenId}/review/${curReview.reviewId}`, {
      body: reviewInfo
    })
      .then(res => {
        alert('삭제되었습니다.');
        setOpen(prev => !prev);
        setDetail(res.data);
        setModifyReviewData({nickname: '', password: '', content: ''});
      })
      .catch(console.log)
  }

  /* 비밀번호 숫자 제한 */
  const validatePassword = (e) => {
    if (!/^[0-9]+$/.test(e.key) && e.key.length === 1) {
      e.preventDefault();
    }
  };

  return (
    <div className='reviewBox'>
      <section>
        {reviews.map(item => (
          <div key={item.id} className='contentBox'>
            <p className='content'>{item.nickname}: {item.content}</p>
            <span className='contentData'>
              <p className='content'>{item.createdAt}</p>
              <span onClick={() => postLikeReview(id, item.id)}>
                <img className='reviewHeart' src='/images/heart.png' alt='좋아요 아아콘'/>
              </span>
              <HiOutlinePencilSquare className='contentIcon'
                                     onClick={event => modifyReview(id, item.id, item.nickname, item.password, item.content)}/>
              <CgClose className='contentIcon' onClick={() => openDelete(id, item.id, item)}/>
            </span>
          </div>
        ))}
      </section>

      <form onSubmit={buttonName === '등록' ? postReview : putReview}>
        <div className='writerInfoBox'>
          <input
            className='writerInfo'
            type='text'
            name='nickname'
            value={reviewInfo.nickname}
            placeholder='닉네임 (2 - 6 글자)'
            onChange={changeValue}
            autoComplete='off'
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
            autoComplete='off'
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
          autoComplete='off'
          required
        />
          <button className='registerButton' type='submit'>{buttonName}</button>
        </div>
      </form>

      {open &&
        <div className='deleteModalContainer'>
          <form className='deleteModal' onSubmit={deleteReview}>
            <div className='closeDeleteBox'>
              <CgClose className='contentIcon' onClick={() => setOpen(prev => !prev)}/>
            </div>
            <h3>비밀번호 4자리를 입력해 주세요.</h3>
            <div className='deletePasswordInputBox'>
              <input
                className='deletePasswordInput'
                value={modifyReviewData.password}
                type='password'
                name='password'
                maxLength={4}
                onKeyDown={validatePassword}
                onChange={changeModifyValue}/>
              <button className='deletePasswordButton' type='submit'>삭제</button>
            </div>
          </form>
        </div>
      }
    </div>
  );
}

export default Review;

const initialReviewInfo = {nickname: '', password: '', content: ''};