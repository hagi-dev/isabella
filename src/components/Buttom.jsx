import React from 'react'
import "../assets/styles/components/Buttom.scss"
const Buttom = (props) => {
    const bordeLetra= props.estilo;
    return (
        <div className="boton" ><a style={{color:bordeLetra,border:`solid 1px ${bordeLetra} ` }} href=""><p>{props.name}</p></a></div>  
    )
}

export default Buttom;
