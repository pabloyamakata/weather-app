import React from "react";
import { useState, createContext } from "react";
import { globalState } from "../../globalState";
import Header from '../Header/Header';
import Page from "../Page/Page";

export const AppContext = createContext(null);

function App() {
    const [state, setState] = useState(globalState);

    return(
        <AppContext.Provider value={{state, setState}}>
            <div className={renderBackground()}>
                <Header />
                <Page />
            </div>
        </AppContext.Provider>
    )

    // METHODS

    // renderBackground() changes the background image based on temperature.

    function renderBackground() {
        const max_temp = 15;
        if(!state.weatherInfo) {
            return 'container-fluid container-dimensions app-cold';
        } else if(state.weatherInfo.main.temp > max_temp) {
            return 'container-fluid container-dimensions app-cold app-warm';
        } else return 'container-fluid container-dimensions app-cold';
    }
}

export default App;