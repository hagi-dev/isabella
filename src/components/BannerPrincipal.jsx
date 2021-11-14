import React from 'react';
import "../assets/styles/components/BannerPrincipal.scss";
import fondo from"../assets/static/background2.png";
import fondoMobile from"../assets/static/fondoMobile.png";
import fondoTablet from"../assets/static/fondoTablet.png";
import modelo from"../assets/static/modelo.png";
import {Box,Grid} from '@material-ui/core';

const BannerPrincipal = () => {
    React.useEffect(() => {
        function handleResize() {
        console.log('resized to: ', window.innerWidth, 'x', window.innerHeight);
        if(window.innerWidth>=959) {
            document.getElementById('fondo').src=fondo;
            console.log('si esta funcinando')
        }
        else if(window.innerWidth>=650 && window.innerWidth<=959) {
            document.getElementById('fondo').src=fondoTablet;

            
        }
        else if(window.innerHeight<=649){
            document.getElementById('fondo').src=fondoMobile;
            
        }
        }
    
        window.addEventListener('resize', handleResize)
      })
    return(
        <section className="section__Banner" style={{backgroundColor:"red"}}>
        <div className="fondo__banner">
            
            <img id="fondo" src={screen.width>=959 ? fondo : fondoMobile} alt="" />
        </div> 
        <div className="container__banner-principal">
            <Grid container >
                <Grid item xs={12} md={6} sm={12} >
                    <Box >
                        <div className="banner__title-contenido" id="banner__title-contenido">
                            <div className="subTitle">
                                <div className="barraLeft"></div>
                                <h2 className="subTitle__description">TENDENCIA AGOSTO 2021</h2>
                                <div className="barraRight"></div>

                            </div>
                            <h1 className="newCollection">NEW COLLECTION</h1>
                            <h2 className="modaEstilo">MODA Y ESTILO</h2>
                            <div className="banner__botones">
                                <div className="banner__botones-inscribirse"><a href=""><p>Inscribirse</p></a></div>
                                <div className="banner__botones-conoceMas"><a href=""><p>Conocemas</p></a></div>
                            </div>
                            <p className="banner__Title-description">LLEGA EL NUEVO CATALOGO, PARA TI QUE DESEAS SENTIRTE HERMOSA, ESPECIAL Y UNICA </p>
                        </div>
                    </Box>
                </Grid>
                <Grid  item xs={12} md={6} sm={12}  >
                    <Box>
                        <div className="banner__modelo-contenido">
                            <img id="modelo" src={modelo} alt="" />
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </div>  
    </section>
    )
};

export default BannerPrincipal;