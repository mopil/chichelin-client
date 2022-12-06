import '../styles/style.css'
import baseUrl from "../api/api";
import {BsFillSuitHeartFill} from "react-icons/bs";

function ChickenCard(props) {
  const {id, name, imageServerFilename, price, spicy, brand, likes} = props.chicken;

  return (
    <main className={`cardContainer spicy${spicy}`} onClick={() => props.onClick(id)}>
      <img className='cardImg' src={`${baseUrl}/chicken/image/${imageServerFilename}`} alt='치킨사진'/>

      <section className='chickenInfo'>
        <p className='chickenInfoDetail'>{name}</p>
        <p className='chickenInfoDetail'>{price}</p>
      </section>

      <section className='chickenInfo'>
        <p className='chickenInfoDetail'>{brand}</p>
        <div className='like'>
          <button className='likedButton'>
            <BsFillSuitHeartFill className='likedIcon'/>
          </button>
          <p className='chickenInfoDetail'>{likes}</p>
        </div>
      </section>
    </main>
  )
}

export default ChickenCard