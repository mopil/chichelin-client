import React from 'react';

function Footer(props) {
  return (
    <footer className='footer'>
      <h3 className='footerTitle'>팀 프로젝트1</h3>
      <ul className='members'>
        <li className='member'>배성흥</li>
        <li className='member'>팀원1</li>
        <li className='member'>팀원2</li>
        <li className='member'>팀원3</li>
      </ul>
    </footer>
  );
}

export default Footer;