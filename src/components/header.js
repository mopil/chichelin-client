import '../styles/header.css';

function Header() {
    return (
        <header className='header'>
            <h1>Chichelin Guide</h1>
            <nav>
                <input type='text' placeholder='브랜드 또는 치킨 입력' />
                <button type='button' id="img_btn" img src='/images/searchGlass.png'>검색</button>
            </nav>
            <div>
                <img src='/images/ChickenMan.png' width='80' height='80' alt='음...'></img>
                <img src='/images/speechBubble.png' width='80' height='80' alt='음...'></img>
            </div>
        </header>
    )
}

export default Header