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
          <div className='slide1'>
            <div className='itembox1'>
                <div className='imgBox'><img></img></div>
                <div className='infoBox'>
                  <div className='contentLeft'>
                    <ul className='ulStyle'>
                      <li>
                        고추바사삭
                      </li>
                      <li>
                        굽네
                      </li>
                    </ul>
                  </div>
                  <div className='contentRight'>
                    <ul className='ulStyle'>
                      <li>
                        18000원
                      </li>
                      <li>
                        ❤️<span>170</span>
                      </li>
                    </ul>
                  </div>
                </div>
            </div>
            <div className='itembox2'>
                <div className='imgBox'><img></img></div>
                <div className='infoBox'>
                  <div className='contentLeft'>
                      <ul className='ulStyle'>
                        <li>
                          고추바사삭
                        </li>
                        <li>
                          굽네
                        </li>
                      </ul>
                    </div>
                    <div className='contentRight'>
                      <ul className='ulStyle'>
                        <li>
                          18000원
                        </li>
                        <li>
                          ❤️<span>170</span>
                        </li>
                      </ul>
                    </div>
                  </div>
            </div>
            <div className='itembox3'>
                <div className='imgBox'><img></img></div>
                <div className='infoBox'>
                  <div className='contentLeft'>
                      <ul className='ulStyle'>
                        <li>
                          고추바사삭
                        </li>
                        <li>
                          굽네
                        </li>
                      </ul>
                    </div>
                    <div className='contentRight'>
                      <ul className='ulStyle'>
                        <li>
                          18000원
                        </li>
                        <li>
                          ❤️<span>170</span>
                        </li>
                      </ul>
                    </div>
                  </div>
            </div>
            <div className='itembox4'>
                <div className='imgBox'><img></img></div>
                <div className='infoBox'>
                  <div className='contentLeft'>
                      <ul className='ulStyle'>
                        <li>
                          고추바사삭
                        </li>
                        <li>
                          굽네
                        </li>
                      </ul>
                    </div>
                    <div className='contentRight'>
                      <ul className='ulStyle'>
                        <li>
                          18000원
                        </li>
                        <li>
                          ❤️<span>170</span>
                        </li>
                      </ul>
                    </div>
                  </div>
            </div>
            <div className='itembox5'>
                <div className='imgBox'><img></img></div>
                <div className='infoBox'>
                  <div className='contentLeft'>
                      <ul className='ulStyle'>
                        <li>
                          고추바사삭
                        </li>
                        <li>
                          굽네
                        </li>
                      </ul>
                    </div>
                    <div className='contentRight'>
                      <ul className='ulStyle'>
                        <li>
                          18000원
                        </li>
                        <li>
                          ❤️<span>170</span>
                        </li>
                      </ul>
                    </div>
                  </div>
            </div>
            <div className='itembox6'>
                <div className='imgBox'><img></img></div>
                <div className='infoBox'>
                  <div className='contentLeft'>
                      <ul className='ulStyle'>
                        <li>
                          고추바사삭
                        </li>
                        <li>
                          굽네
                        </li>
                      </ul>
                    </div>
                    <div className='contentRight'>
                      <ul className='ulStyle'>
                        <li>
                          18000원
                        </li>
                        <li>
                          ❤️<span>170</span>
                        </li>
                      </ul>
                    </div>
                  </div>
            </div>
            <div className='itembox7'>
                <div className='imgBox'><img></img></div>
                <div className='infoBox'>
                <div className='contentLeft'>
                    <ul className='ulStyle'>
                      <li>
                        고추바사삭
                      </li>
                      <li>
                        굽네
                      </li>
                    </ul>
                  </div>
                  <div className='contentRight'>
                    <ul className='ulStyle'>
                      <li>
                        18000원
                      </li>
                      <li>
                        ❤️<span>170</span>
                      </li>
                    </ul>
                  </div>
                </div>
            </div>
            <div className='itembox8'>
                <div className='imgBox'><img></img></div>
                <div className='infoBox'>
                  <div className='contentLeft'>
                      <ul className='ulStyle'>
                        <li>
                          고추바사삭
                        </li>
                        <li>
                          굽네
                        </li>
                      </ul>
                    </div>
                    <div className='contentRight'>
                      <ul className='ulStyle'>
                        <li>
                          18000원
                        </li>
                        <li>
                          ❤️<span>170</span>
                        </li>
                      </ul>
                    </div>
                  </div>
            </div>
          </div>
          <div id='slide2'>
            <h3>2</h3>
          </div>

        </Slider>
      </div>
    );
  }
}