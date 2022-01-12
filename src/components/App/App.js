import React from "react";
import { useState, createContext } from "react";
import { globalState } from "../../globalState";
import Header from '../Header/Header';
import Page from "../Page/Page";
import './appStyles.css';

export const AppContext = createContext(null);

function App() {
    const [state, setState] = useState(globalState);

    return(
        <AppContext.Provider value={{state, setState}}>
            <div id="main-container" className={renderBackground()}>
                <Header />
                <Page />
            </div>
        </AppContext.Provider>
    )

    // METHODS

    // renderBackground() returns a className and sets the 
    // background image based on temperature.

    function renderBackground() {
        const max_temp = 15;
        if(!state.weatherInfo) return 'container-fluid app-cold';
        else if(state.weatherInfo.forecast.forecastday[0].day.avgtemp_c > max_temp) return 'container-fluid app-cold app-warm'; 
        else return 'container-fluid app-cold';
    }
}

export default App;