import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from "../containers/Home";
import Catalogos from "../containers/Catalogos";

const App = () => 
(
    <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/catalogos" component={Catalogos} />
    </BrowserRouter>
);

export default App;