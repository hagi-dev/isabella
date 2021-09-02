import React from 'react';
import "../assets/styles/components/AvanceCategoria__dama.scss"
const AvanceCategoria__dama = ({children}) => {
    return (
        <div className="AvanceCategoria__dama">
            <div className="avanceCategoria__dama-title" id="avanceCategoria__dama-title">
            <h1>DAMA</h1>
            <h3>Blusas <span> ...</span></h3>
            <div className="avanceCategoria__dama-listaCategoria" style={{display:'none'}}></div>
            </div>
            {children} {/** carousel de dama */}
        </div>
    )
}

export default AvanceCategoria__dama;
