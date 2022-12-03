import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import SliderCard from "./SliderCard";

function SearchSlider({chickens}) {
  const settings = {
    rows: 2,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 800
  };

  return (
    <Slider {...settings}>
      {chickens.map(item => <SliderCard key={item.id} chicken={item}/>)}
    </Slider>
  );
}

export default SearchSlider;