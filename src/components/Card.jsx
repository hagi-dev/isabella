import React from 'react';
import "../assets/styles/components/Card.scss";

const Card = ({name,url,publico}) => {
    return (
        <li className="carousel__card">
            <div className="card__description" style={{display:"none"}}>
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
