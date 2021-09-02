import React from 'react';
import "../assets/styles/components/Card.scss";
import modeloPrueba from '../assets/static/Prendas/modelo5.1.png';

const Card = ({name,url,publico}) => {
    return (
        <li className="carousel__card" style={publico=="caballero" ? {backgroundImage: "radial-gradient(circle, #6d737b, #546f96, #3c68b0, #2e5dc6, #3b4ed7)"}: {backgroundImage: "radial-gradient(circle, #ffffff, #d8c9de, #bf91b2, #aa587a, #8d1839)"}}>
            <div className="card__decoration uno"></div>
            <div className="card__decoration dos"></div>
            <div className="card__decoration tres"></div>
            <div className="card__description">
                <h1>{name}</h1>
                <a href="#">Ver detalles</a>
            </div>
            <div className="card__imagen">
                <img src={url} alt="" />
            </div>
        </li>
    )
}

export default Card;
