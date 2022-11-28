import React, { Component } from "react";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ChickenCard from './chickenCard.js'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
      // autoplay: true,
    };
    return (
      <div>
        <Slider {...settings}>
          <div id='chickenBox'>
            <ChickenCard></ChickenCard>
            <ChickenCard></ChickenCard>
            <ChickenCard></ChickenCard>
            <ChickenCard></ChickenCard>
          </div>
          <div id='chickenBox'>
            <ChickenCard></ChickenCard>
            <ChickenCard></ChickenCard>
            <ChickenCard></ChickenCard>
            <ChickenCard></ChickenCard>
          </div>
          <div id='chickenBox'>
            <ChickenCard></ChickenCard>
            <ChickenCard></ChickenCard>
            <ChickenCard></ChickenCard>
            <ChickenCard></ChickenCard>
          </div>
          <div id='chickenBox'>
            <h3>4</h3>
          </div>
          <div id='chickenBox'>
            <h3>5</h3>
          </div>
          <div id='chickenBox'>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}