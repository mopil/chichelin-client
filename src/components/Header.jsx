import {useState} from "react";
import '../styles/style.css';
import {useNavigate} from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const [searchWord, setSearchWord] = useState('');

  const movePage = (path) => navigate(path);
  const changeValue = (e) => setSearchWord(e.target.value);
  const searchChicken = (e) => {
    e.preventDefault();
    movePage(`/search?word=${searchWord}`);
    setSearchWord('');
  };

  return (<header className='header'>
    <button className='homeButton' onClick={() => movePage('/')}>
      <h1 className='home'>Chichelin Guide</h1>
    </button>

    <form className="searchBar" onSubmit={searchChicken}>
      <input className="searchInput" name="searchWord" value={searchWord} placeholder="검색" onChange={changeValue}/>
      <button className='searchButton' type='submit'>
        <img className='searchImage' src='/images/searchGlass.png' alt='search'/>
      </button>
    </form>

    <button className='chickenUploadButton' onClick={() => movePage(`/upload`)}>
      <img src='/images/ChickenMan.png' height='100%' alt='chickenMan'/>
      <span className='speechBubble'>
        <img src="/images/speechBubble.png" height='100%' alt='speechBubble'/>
        <p className='buttonContent'>치킨 <br/> 추가하기</p>
      </span>
    </button>
  </header>)
}

export default Header