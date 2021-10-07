import React from 'react';
import dama from '../assets/static/Grupo5.png';
import caballero from '../assets/static/Grupo6.png';
import "../assets/styles/components/AvanceCategoria.scss";

const AvanceCategoria = ({children}) => {
    
    return (
    <section className="avanceCategoria">
        <div className="avanceCategoria-title"><h1>Catalogo temporada agosto-setiembre</h1></div>
            {children}      
    </section>
    )
}

export default AvanceCategoria;
