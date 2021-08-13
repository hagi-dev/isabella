import React, {useEffect} from 'react';
import '../assets/styles/components/Header.scss';
import logo2 from '../assets/static/logo4.png';
import logo from '../assets/static/logo2.png';
import { StateScroll } from './hooks/StateScroll';


class ButtomMenu extends React.Component 
{

    state = 
    {
        count:0,
    }
    /* validar si nav menu se ve o no y activarlo si no esta por medio del boton menu qu sala apartir de display mediano*/
    handleClik = () =>{

        console.log(this.state.count)
        this.setState({count:this.state.count +1});

        if(this.state.count%2===0){
            document.getElementById("header").style.backgroundColor="#FFFF";
            document.getElementById('nav-list2').classList.add("active");
            document.getElementById('logo').src=logo2;
            document.getElementById("barraIzquierda").style.background="#8D1839";
            document.getElementById("barraDerecha").style.background="#8D1839";
            document.getElementById("navA1").style.color="black";
            document.getElementById("navA2").style.color="black";
            document.getElementById("navA3").style.color="black";
            document.getElementById("navA4").style.color="black";
            document.getElementById("navA5").style.color="black";
            document.getElementById('nav-list2').style.display = "block";

        }
        else{
            document.getElementById('nav-list2').classList.remove("active");
            document.getElementById('nav-list2').style.display = "none";
            if(this.props.estado){
                console.log("aki")
                console.log(this.props.estado);
                document.getElementById('logo').src=logo2;
                document.getElementById('header').style.backgroundColor="white";
                document.getElementById("barraIzquierda").style.backgroundColor="#8D1839";
                document.getElementById("barraDerecha").style.backgroundColor="#8D1839";
                document.getElementById("navA1").style.color="black";
                document.getElementById("navA2").style.color="black";
                document.getElementById("navA3").style.color="black";
                document.getElementById("navA4").style.color="black";
                document.getElementById("navA5").style.color="black";

            }else{
                document.getElementById('logo').src=logo;
                document.getElementById('header').style.backgroundColor="transparent";
                document.getElementById("navA2").style.color="white";
                document.getElementById("barraIzquierda").style.backgroundColor="white";
                document.getElementById("barraDerecha").style.backgroundColor="white";
                document.getElementById("navA1").style.color="white";
                document.getElementById("navA2").style.color="white";
                document.getElementById("navA3").style.color="white";
                document.getElementById("navA4").style.color="white";
                document.getElementById("navA5").style.color="white";
                
            }
        }

    }

      


    render()  
    {
        const scrolled=this.props.estado;
        const valor1= this.props.valorEnviar;
        return (
                    <div className="nav">
                    <div className="iconoMenu"  onClick={this.handleClik}>
                        <svg height="384pt" viewBox="0 -53 384 384" width="384pt" xmlns="http://www.w3.org/2000/svg"><path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/></svg>
                    </div>
                    <nav className="nav-list" id="nav-list2">
                        <ul>
                            {console.log(valor1)}
                            <li><a id="navA1" className='navA' href="#" style={ this.props.estado ? {color:"black"} : {color:"white"}} >Home </a></li>       
                            <li><a id="navA2"  className="navA" href="#" style={ this.props.estado ? {color:"black"} : {color:"white"}} >Catalogos</a></li>
                            <li><a id="navA3" className="navA" href="#" style={ this.props.estado ? {color:"black"} : {color:"white"}} >Premios</a></li>
                            <li><a id="navA4" className="navA" href="#" style={ this.props.estado ? {color:"black"} : {color:"white"}} >Blog</a></li>
                        </ul> 
                    </nav>
                    <div className="barraIzquierda" id="barraIzquierda" style={scrolled ? {backgroundColor:"#8D1839"}: { backgroundColor:"white"}}></div>
                        <a style={ this.props.estado ? {color:"black"} : {color:"white"}} className="anuncio navA" href="#" id="navA5">* Trabaja con catalogo isabella *</a>
                    <div className="barraDerecha" id="barraDerecha" style={scrolled ? {backgroundColor:"#8D1839"}: { backgroundColor:"white"}}></div>
                </div>
        )
    }
}

export default ButtomMenu;