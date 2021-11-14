import React from 'react';
import Header from '../components/Header';
import HomeMain from '../components/HomeMain';
import '../assets/styles/App.scss';
import '../assets/styles/components/Home.scss';
import Footer from '../components/Footer';
import Burbujas from '../components/Burbujas';

class Home extends React.Component {

    render() {
        return(
            <div className="Home" >
                <Header/>
                <HomeMain/>
                <Footer/>
            </div>
        )    
    };

}

export default Home;