import React from 'react';
import dama from '../assets/static/Grupo5.png';
import caballero from '../assets/static/Grupo6.png';
import "../assets/styles/components/AvanceCategoria.scss";

const AvanceCategoria = ({children}) => {
    
    return (
    <section className="avanceCategoria">
        <div className="avanceCategoria-title"><h1>Avance catalogo temporada</h1></div>
        <div className="avanceCategoria__dama-title" id="avanceCategoria__dama-title">
            <h1>DAMA</h1>
            <h3>Blusas <span> ...</span></h3>
            <div className="avanceCategoria__dama-listaCategoria" style={{display:'none'}}></div>
        </div>
            {children}
        <div className="avanceCategoria__caballero">
        </div>  
    </section>
    )
}

export default AvanceCategoria;
