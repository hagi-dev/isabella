import React from 'react';
import Header from '../components/Header';
import HomeMain from '../components/HomeMain';
import '../assets/styles/App.scss';
import Footer from '../components/Footer';

class App extends React.Component {

    render() {
        return(
            <div className="App" >
                <Header/>
                <HomeMain/>
                <Footer/>
            </div>
        )    
    };

}

export default App;