import React from 'react';
import {Box,Grid} from '@material-ui/core';
import dama from '../assets/static/Grupo5.png';
import caballero from '../assets/static/Grupo6.png';
import Buttom from './Buttom';
import "../assets/styles/components/AvanceCategoria.scss"
const AvanceCategoria = () => {
    return (
    <section className="avanceCategoria">
        <div><h1>Avance catalogo temporada</h1></div>
        <div className="avanceCategoria__dama">
            <Grid container >
                <Grid item xs={12} md={6} sm={6} >
                    <Box >
                        <div className="avanceCategoria__dama-description" id="avanceCategoria__dama-description">
                            <h1>Categoria Dama</h1>
                            <p>Lo mejor de este 2021 pra damas, mira las mejores prendas de vestir y calzados que llegaran a finales de agosto</p>
                            <Buttom name={"Ver modelos"} estilo={"balck"}/>
                        </div>
                    </Box>
                </Grid>
                <Grid  item xs={12} md={6} sm={6}  >
                    <Box>
                        <div className="avanceCategoria__dama-imagen">
                            <img src={dama} alt="imagen dama" />
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </div>
        <div className="avanceCategoria__caballero">
            <Grid container >
                <Grid  item xs={12} md={6} sm={6}  >
                    <Box>
                        <div className="avanceCategoria__caballero-imagen">
                            <img src={caballero} alt="" />
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} sm={6} >
                    <Box >
                        <div className="avanceCategoria__caballero-description" id="avanceCategoria__caballero-description">
                            <h1>Categoria Caballero</h1>
                            <p>Lo mejor de este 2021 pra caballerro, mira las mejores prendas de vestir y calzados que llegaran a finales de agosto</p>
                            <Buttom name={"Ver modelos"} estilo={"balck"}/>   
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </div>  
    </section>
    )
}

export default AvanceCategoria;
