import React, { Component } from "react";
import Slider from "react-slick";
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


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
      
    };
    return (
      <div>
        <Slider {...settings}>
          <div id='chickenBox1'>
            <h3>1</h3>
          </div>
          <div id='chickenBox2'>
            <h3>2</h3>
          </div>
          <div id='chickenBox2'>
            <h3>3</h3>
          </div>
          <div id='chickenBox2'>
            <h3>4</h3>
          </div>
          <div id='chickenBox2'>
            <h3>5</h3>
          </div>
          <div id='chickenBox2'>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}