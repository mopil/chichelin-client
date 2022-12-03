import React from 'react';
import '../styles/notFound.css';
import {useNavigate} from "react-router-dom";

function NotFound(props) {
  const navigate = useNavigate();

  const onClick = () => navigate('/');

  return (
    <div className='notFound'>
      <h1 className='notFoundMessage'>Not Found</h1>
      <h2 className='notFoundMessage'>페이지를 찾을 수 없습니다.</h2>

      <button className='mainButton' onClick={onClick}>메인페이지로 돌아가기</button>
    </div>
  )
}

export default NotFound;