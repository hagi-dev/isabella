import React from 'react';
import "../assets/styles/components/HomeMain.scss";
import BannerPrincipal from './BannerPrincipal';
import AvanceCategoria from './AvanceCategoria';
import EmpresariaHome from './EmpresariaHome';

const Main = () => (
    <main>
        <BannerPrincipal/>
        <AvanceCategoria/> 
        <EmpresariaHome/>
    </main>
);

export default Main;