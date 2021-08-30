import React from 'react';
import "../assets/styles/components/Card.scss";
import modeloPrueba from '../assets/static/Prendas/modelo5.1.png';

const Card = ({name,url}) => {
    return (
        <li className="avanceCategoria__dama-card">
            <div className="avanceCategoria__dama-cardDecoration uno"></div>
            <div className="avanceCategoria__dama-cardDecoration dos"></div>
            <div className="avanceCategoria__dama-cardDecoration tres"></div>
            <div className="avanceCategoria__dama-cardDescription">
                <h1>{name}</h1>
                <a href="#">Ver detalles</a>
            </div>
            <div className="avanceCategoria__dama-cardImage">
                <img src={url} alt="" />
            </div>
        </li>
    )
}

export default Card;
