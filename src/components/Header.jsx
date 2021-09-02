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
        let estado= window.pageYOffset;
        console.log(estado);
        const verNav=() =>{
            if(innerWidth>960 ) {
                document.getElementById("nav-list2").style.display = "block";
            }else{
                document.getElementById("nav-list2").style.display = "none";
            }
            console.log('aki esta el problema')
        }
        const changeColor= () =>{
        let valor2=window.pageYOffset;//valor2 es la referencia al valor canbiante de el evento scroll
        console.log("valor2: ",valor2 , "estado: ", estado) ;
        
            if (valor2 >= estado ) {
                console.log('agarra')
                document.getElementById("header").style.display = "none";
            }else{
                document.getElementById("header").style.display = "flex";
            }
            estado= valor2;
    
        }
        window.addEventListener("scroll",changeColor);
        window.addEventListener("resize",verNav);
    })

    return(

    <header id="header" style={ scrolled  ? {background:"white",boxShadow: '5px 0px 16px 0 rgb(0 0 0 / 24%)'} : {background:"transparent", transition: '1.5 ease all'}}>
        <div className="logo">
            <img id="logo" src={ scrolled ? logo4 : logo3} alt="logo isabella"/>
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