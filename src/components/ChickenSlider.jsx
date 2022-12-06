import React from "react";
import Slider from "react-slick";
import '../styles/search.css';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import SliderCard from "./SliderCard";

function NextArrow(props) {
  const {className, style, onClick} = props;
  return (
    <div
      className={className}
      style={{...style, display: "block"}}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const {className, style, onClick} = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function ChickenSlider({chickens, row, dots, showLength}) {
  const settings = {
    rows: row,
    slidesToShow: showLength,
    slidesToScroll: 4,
    arrows: true,
    dots: dots,
    infinite: true,
    speed: 800,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
  };

  return (
    <Slider {...settings}>
      {chickens.map(item => <SliderCard key={item.id} chicken={item}/>)}
    </Slider>
  );
}

export default ChickenSlider;