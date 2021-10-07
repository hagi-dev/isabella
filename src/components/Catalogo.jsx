import React from 'react'
import "../assets/styles/components/catalogo.scss";
import catalogo1 from "../assets/static/pdf/null.pdf";

const Catalogo = () => {
    let valor="";
    const onclik1=() => {
        valor= document.getElementById("codigoConsulta").value;
    }
    return (
        <div className="catalogo">
            <div className="catalogo__consultaWhattsapp">
                <a href={catalogo1} download="catalogo_ISABELLA" className="catalogo__descarga">
                    <svg id="bold" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 16c-.205 0-.401-.084-.542-.232l-5.25-5.5c-.455-.476-.117-1.268.542-1.268h2.75v-5.75c0-.689.561-1.25 1.25-1.25h2.5c.689 0 1.25.561 1.25 1.25v5.75h2.75c.659 0 .997.792.542 1.268l-5.25 5.5c-.141.148-.337.232-.542.232z"/><path d="m22.25 22h-20.5c-.965 0-1.75-.785-1.75-1.75v-.5c0-.965.785-1.75 1.75-1.75h20.5c.965 0 1.75.785 1.75 1.75v.5c0 .965-.785 1.75-1.75 1.75z"/>
                    </svg>
                </a>
                <a className="catalogo__consulta" href={`https://wa.me/51973159686?text=buenas%20quisiera%20hacer%20una%20consulta%20de%20stock`}>consultar stock</a>
            </div>
            <iframe className="iframe" width="100%" height="100%" src="https://online.fliphtml5.com/qocbm/rjgg/"  scrolling="no" allowtransparency="true" allowfullscreen="true" ></iframe>
        </div>
    )
}
export  default Catalogo;
