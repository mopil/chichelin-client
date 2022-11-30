import '../styles/header.css';
import {useNavigate} from "react-router-dom";
import {useState} from "react";

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

  return (
    <header className='header'>
      <button className='homeButton' onClick={() => movePage('/')}>
        <h1 className='home'>Chichelin Guide</h1>
      </button>

      <form className="searchBar" onSubmit={searchChicken}>
        <input className="searchInput" name="searchWord" value={searchWord} placeholder="검색" onChange={changeValue}/>
        <button className='searchButton' type='submit'>
          <img className='searchImage' src='/images/searchGlass.png' alt='search'/>
        </button>
      </form>

      <div className='images'>
        <img src='/images/ChickenMan.png' width='80' height='80' alt='음...'></img>
        <img src="/images/speechBubble.png" width='80' height='80' alt="엄"></img>
      </div>
    </header>
  )
}

export default Header