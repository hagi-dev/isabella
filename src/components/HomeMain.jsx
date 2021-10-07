import React, {useState,useEffect} from 'react';
import "../assets/styles/components/HomeMain.scss";
import BannerPrincipal from './BannerPrincipal';
import AvanceCategoria from './AvanceCategoria';
import EmpresariaHome from './EmpresariaHome';
import AvanceCategoria__dama from './AvanceCategoria__dama';
import AvanceCategoria__caballero from './AvanceCategoria__caballero';
import Card from './Card';
import CarouselCards from './CarouselCards';
import Catalogo from './Catalogo';
import datos1 from '../containers/initialState.json';

const Main = () => {

    const [card, setCard ] = useState({datos:[]});
    // const [card2, setCard2 ] = useState({camisas:[]});

    // useEffect(() => {
    //     fetch("http://localhost:3000/initialState")
    //     .then(response => response.json())
    //     .then(data=> setCard(data));

    // },[]);

    console.log(card);
    let backgrounColor;
    return(
        <main id="main">
        <BannerPrincipal/>
        <AvanceCategoria>
            <AvanceCategoria__dama>
                <CarouselCards> 
                    {
                        datos1.initialState.datos.map(item => 
                            item.publico=="dama"? <Card key={item.id} {...item}  /> : ""
                        
                        )
                    }
                </CarouselCards>
            </AvanceCategoria__dama>
            <AvanceCategoria__caballero >
                <CarouselCards>

                    {
                        datos1.initialState.datos.map(item => 
                            item.publico=="caballero"? <Card key={item.id} {...item}  /> : ""

                        )
                    }
                </CarouselCards>
            </AvanceCategoria__caballero>
        </AvanceCategoria>
        <EmpresariaHome/>
    </main>
    )
};

export default Main;