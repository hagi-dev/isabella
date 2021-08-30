import React from 'react';
import Glider from 'react-glider';

window.addEventListener('load', function() {
    console.log('glider esta funcionado')
    new Glider(document.querySelector('.avanceCategoria__dama-cards'), {
        slidesToShow: 3,
        dots: '#dots',
        arrows: {
          prev: '.carousel__anterior',
          next: '.carousel__siguiente'
        }
      });
});
const Carousel = ({children}) => {
    return (
        <div className="avanceCategoria__dama">
            <button aria-label="Anterior" className="carousel__anterior">
                {"<"}
            </button>
            {children}
            <button aria-label="Siguiente" className="carousel__siguiente">
                {">"}
            </button>
        </div>
    )
}

export default Carousel;
