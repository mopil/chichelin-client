import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import SliderCard from "./SliderCard";

function ChickenSlider({chickens, row, dots, showLength}) {
  const settings = {
    rows: row,
    slidesToShow: showLength,
    slidesToScroll: 4,
    arrows: true,
    dots: dots,
    infinite: true,
    speed: 800
  };

  return (
    <Slider {...settings}>
      {chickens.map(item => <SliderCard key={item.id} chicken={item}/>)}
    </Slider>
  );
}

export default ChickenSlider;