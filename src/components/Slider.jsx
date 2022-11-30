import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ChickenCard from './ChickenCard.jsx'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      // autoplay: true,
    };
    return (
      <Slider {...settings}>
        {/*<div className='chickenBox'>*/}
        {/*  <ChickenCard/>*/}
        {/*  <ChickenCard/>*/}
        {/*  <ChickenCard/>*/}
        {/*  <ChickenCard/>*/}
        {/*</div>*/}
        {/*<div className='chickenBox'>*/}
        {/*  <ChickenCard/>*/}
        {/*  <ChickenCard/>*/}
        {/*  <ChickenCard/>*/}
        {/*  <ChickenCard/>*/}
        {/*</div>*/}
        {/*<div className='chickenBox'>*/}
        {/*  <ChickenCard/>*/}
        {/*  <ChickenCard/>*/}
        {/*  <ChickenCard/>*/}
        {/*  <ChickenCard/>*/}
        {/*</div>*/}
        <div className='chickenBox'>
          <h3>4</h3>
        </div>
        <div className='chickenBox'>
          <h3>5</h3>
        </div>
        <div className='chickenBox'>
          <h3>6</h3>
        </div>
      </Slider>
    );
  }
}