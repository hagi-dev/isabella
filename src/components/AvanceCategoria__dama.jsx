import React from 'react';
import "../assets/styles/components/AvanceCategoria__dama.scss"
import fondo from '../assets/static/fondo6.png';

const AvanceCategoria__dama = ({children}) => {
    return (
        <div className="AvanceCategoria__dama" >
            <div className="avanceCategoria__dama-title" id="avanceCategoria__dama-title">
            <h1>DAMA</h1>
            <h3 style={{display:"none"}}>Blusas <span> ...</span></h3>
            <a href="/catalogos">
                Ver catalogo completo               
            </a>
            <div className="avanceCategoria__dama-listaCategoria" style={{display:'none'}}></div>
            </div>
            {children} {/** carousel de dama */}
        </div>
    )
}

export default AvanceCategoria__dama;
