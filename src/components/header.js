import '../styles/header.css';

function Header() {
  return (
    <header className='header'>
      <h1 className='name'>Chichelin Guide</h1>

      <label className="searchBar">
        <input className="searchInput" type="search" placeholder="검색"/>
        <button className='searchButton' type='button'>
          <img className='searchImage' src='/images/searchGlass.png' alt='search'/>
        </button>
      </label>

      <div className='images'>
        <img src='/images/ChickenMan.png' width='80' height='80' alt='음...'></img>
        <img src="/images/speechBubble.png" width='80' height='80' alt="엄"></img>
      </div>
    </header>
  )
}

export default Header