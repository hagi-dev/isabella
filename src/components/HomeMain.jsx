import React, {useState,useEffect} from 'react';
import "../assets/styles/components/HomeMain.scss";
import BannerPrincipal from './BannerPrincipal';
import AvanceCategoria from './AvanceCategoria';
import EmpresariaHome from './EmpresariaHome';
import Carousel from './Carousel';
import Card from './Card';
import Cards from './Cards';

const Main = () => {

    const [card, setCard ] = useState({blusas:[]});
    useEffect(() => {
        fetch("http://localhost:3000/initialState")
        .then(response => response.json())
        .then(data=> setCard(data));

    },[]);

    console.log(card);
    return(
        <main>
        <BannerPrincipal/>
        <AvanceCategoria>
            <Carousel>
                <Cards> 
                    {
                        card.blusas.map(item => 
                        <Card key={item.id} {...item} />
                        )
                    }
                </Cards>
            </Carousel>
        </AvanceCategoria>
        <EmpresariaHome/>
    </main>
    )
};

export default Main;