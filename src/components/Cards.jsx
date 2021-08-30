import React,{component} from 'react';
import "../assets/styles/components/Cards.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Cards = ({children}) => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: false,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        initialSlide: 0,
        responsive:[
            {   
                breakpoint:1100,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                    initialSlide: 2,
                    dots: true,
                    infinite: true,
                },               
                
                breakpoint:600,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                    initialSlide: 2,
                },
                
            },
        ]
      };
    return (
        <div className="avanceCategoria__dama-cards">
            {/* <Slider {...settings}> */}
                {children}
            {/* </Slider> */}
        </div>
    )
}

export default Cards;
