import React from 'react';
import Header from '../components/Header';
import '../assets/styles/App.scss';
import Catalogo from '../components/Catalogo';

class Catalogos extends React.Component {

    render() {
        return(
            <div className="catalogos" >
                <Header colorFondo={"white"}/>
                <Catalogo/>
            </div>
        )    
    };

}

export default Catalogos;