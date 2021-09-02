import React,{component} from 'react';
import "../assets/styles/components/Cards.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
//import Slider from 'infinite-react-carousel';
//import InfiniteCarousel from 'react-leaf-carousel';

const CarouselCards = ({children}) => {
    const settings =  {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 880,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            infinite: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };    return (
        <div className="carousel__cards">
            <Slider {...settings}> 
                {children}
            </Slider>
        </div>
    )
}

export default CarouselCards;
