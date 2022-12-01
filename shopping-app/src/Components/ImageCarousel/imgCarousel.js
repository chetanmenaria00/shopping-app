import React, { Component } from "react";
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import './imgCarousel.css'
import One from '../../Images/Carousel/1.png'
import Two from '../../Images/Carousel/2.png'
import Three from '../../Images/Carousel/3.png'
import Four from '../../Images/Carousel/4.png'
import Five from '../../Images/Carousel/5.png'
import Six from '../../Images/Carousel/6.png'

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 6000,
      autoplaySpeed:0,
      cssEase: "linear"
    };
    
    return (
        <div class="mb-3 p-4 img-bg">
            <Slider {...settings}>
                <div>
                    <img class="img-carousel" src={One}></img>
                </div>
                <div>
                    <img class="img-carousel" src={Two}></img>
                </div>
                <div>
                    <img class="img-carousel" src={Three}></img>
                </div>
                <div>
                    <img class="img-carousel" src={Four}></img>
                </div>
                <div>
                    <img class="img-carousel" src={Five}></img>
                </div>
                <div>
                    <img class="img-carousel" src={Six}></img>
                </div>
            </Slider>
        </div>
    );
  }
}