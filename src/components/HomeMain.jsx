import React, {useState,useEffect} from 'react';
import "../assets/styles/components/HomeMain.scss";
import BannerPrincipal from './BannerPrincipal';
import AvanceCategoria from './AvanceCategoria';
import EmpresariaHome from './EmpresariaHome';
import AvanceCategoria__dama from './AvanceCategoria__dama';
import AvanceCategoria__caballero from './AvanceCategoria__caballero';
import Card from './Card';
import CarouselCards from './CarouselCards';

const Main = () => {

    const [card, setCard ] = useState({datos:[]});
    // const [card2, setCard2 ] = useState({camisas:[]});

    useEffect(() => {
        fetch("http://localhost:3000/initialState")
        .then(response => response.json())
        .then(data=> setCard(data));

    },[]);

    console.log(card);
    let backgrounColor;
    return(
        <main>
        <BannerPrincipal/>
        <AvanceCategoria>
            <AvanceCategoria__dama>
                <CarouselCards> 
                    {
                        card.datos.map(item => 
                            item.publico=="dama"? <Card key={item.id} {...item}  /> : ""
                        
                        )
                    }
                </CarouselCards>
            </AvanceCategoria__dama>
            <AvanceCategoria__caballero >
                <CarouselCards>

                    {
                        card.datos.map(item => 
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