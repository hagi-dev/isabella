import React from 'react';
import {Box,Grid} from '@material-ui/core';
import "../assets/styles/components/empresaria.scss";
import Buttom from './Buttom';
import EmpresariaGrafica from '../components/representacionesGraficas/EmpresariaGrafica';

const EmpresariaHome = () => {
    const SVG = () => 
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink">
            <path d="some path here" fill="#000" />
        </svg>;
    return (
        <section className="Empresaria">
             <div className="Empresaria__home">
            <Grid container >
                <Grid  item xs={12} md={6} sm={6}  >
                    <Box>
                        <div className="Empresaria__description">
                            <h1>Categoria Caballero</h1>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'
                            </p>
                            <Buttom name={"Mas detalles"} estilo={"balck"}/> 
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} sm={6} >
                    <Box >
                        <div className="Empresaria__img" id="Empresaria__img">
                            <EmpresariaGrafica/>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </div> 
        </section>
    )
}

export default EmpresariaHome;
