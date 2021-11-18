import React from "react";
import { Routes,Route } from 'react-router-dom'
import WelcomePage from './WelcomePage/welcomepage'

const App = () => (
        <>
            <Route path="/home" component={WelcomePage}/>
        </> 
);

export default App;