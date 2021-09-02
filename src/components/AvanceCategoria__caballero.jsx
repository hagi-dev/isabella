import React from 'react';
import "../assets/styles/components/AvanceCategoria__caballero.scss"
const AvanceCategoria__caballero = ({children}) => {
    return (
        <div className="AvanceCategoria__caballero">
            <div className="avanceCategoria__caballero-title" id="avanceCategoria__caballero-title">
            <h1>CABALLERO</h1>
            <h3>Blusas <span> ...</span></h3>
            <div className="avanceCategoria__caballero-listaCategoria" style={{display:'none'}}></div>
            </div>
            {children} {/** carousel de caballero */}
        </div>
    )
}

export default AvanceCategoria__caballero;