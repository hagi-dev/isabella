import React from 'react';
import "../assets/styles/components/footer.scss";
import footerBackground from '../assets/static/backgroundFooter.png'
import Youtube from"./representacionesGraficas/Youtube";
import Facebookk from"./representacionesGraficas/Facebookk";
import Instagram from"./representacionesGraficas/Instagram";
import Whatsapp from"./representacionesGraficas/Whatsapp";

const Footer = () => {

    return (
        <div className="footer" >
            <div className="footer__contenido">
                <div className="footer__redesFooter">
                    <div className="youtube">
                        <Youtube estado={false} visible={"flex"} />                 
                    </div>
                    <div className="Facebookk">
                        <Facebookk estado={false} visible={"flex"}/>
                    </div>
                    <div className="instagra">
                        <Instagram estado={false} visible={"flex"}/>
                    </div>
                    <div className="whatsapp">
                        <Whatsapp estado={false} visible={"flex"}/>
                    </div>
                </div>
                <div className="footer__nav">
                    <nav>
                        <ul>
                            <li><a href="">Empresas que trabajamos</a></li>
                            <li><a href="">nosotros</a></li>
                            <li><a href="">preguntas frecuentes</a></li>
                            <li><a href="http://192.168.100.71:80/login">Acseso Sistema</a></li>
                        </ul>
                    </nav>    
                </div> 
                <div className="footer__contacto">
                    <h2> <p>Encuentranos en:</p> AV. Carlos Izaguirre N°455</h2>
                    <a>telefono: 927458658</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
