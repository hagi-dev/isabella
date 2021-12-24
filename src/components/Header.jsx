import React, { useState, useLayoutEffect ,useEffect} from 'react';
import "../assets/styles/components/Header.scss";
import logo3 from"../assets/static/logo2.png";
import logo4 from"../assets/static/logo4.png";
import ButtomMenu from"./ButtomMenu";
import { StateScroll } from './hooks/StateScroll';
import Youtube from"./representacionesGraficas/Youtube";
import Facebookk from"./representacionesGraficas/Facebookk";
import Instagram from"./representacionesGraficas/Instagram";
import Whatsapp from"./representacionesGraficas/Whatsapp";


const Header = (props) =>{

    const [scrolled] = StateScroll();
    
     
    React.useEffect(()=>{
        const verNav=() =>{
            if(innerWidth>960 ) {
                document.getElementById("nav-list2").style.display = "block";
                document.getElementById('body').style.overflowY = "scroll";

            }else{
                document.getElementById("nav-list2").style.display = "none";
            }
        }
        let estado= window.pageYOffset;
        const cambioPosicion= () =>{
            let valor2=window.pageYOffset;//valor2 es la referencia al valor canbiante de el evento scroll
            console.log("valor2: ",valor2 , "estado: ", estado) ;
            
            if (valor2 >= estado) {
                document.getElementById('header').classList.add("active");
            }else{
                document.getElementById('header').classList.remove("active");
            }
            estado= valor2;
        }

        window.addEventListener("resize",verNav);
        window.addEventListener("scroll",cambioPosicion)
    })

    return(

    <header id="header" className="header" style={ scrolled ? {background:"white",boxShadow: '5px 0px 16px 0 rgb(0 0 0 / 24%)'} : {background:"transparent", transition: '1.5 ease all'}}>
        <div className="logo">
            <a href="/home"><img id="logo" src={ scrolled ? logo4 : logo3} alt="logo isabella"/></a>
        </div>  
        <ButtomMenu estado={scrolled} />        
        <div className="redesSociales">
            <div className="youtube">
                <Youtube estado={scrolled}/>                 
            </div>
            <div className="Facebookk">
                <Facebookk estado={scrolled}/>
            </div>
            <div className="instagra">
                <Instagram estado={scrolled}/>
            </div>
            <div className="whatsapp">
                <Whatsapp estado={scrolled}/>
            </div>
        </div>  
    </header>

    )    
};


export default Header;