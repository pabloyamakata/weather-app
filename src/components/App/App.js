import React from "react";
import { useState, createContext } from "react";
import { globalState } from "../../globalState";
import Header from '../Header/Header';
import Page from "../Page/Page";
import styles from './App.module.css';

export const AppContext = createContext(null);

function App() {
    const [state, setState] = useState(globalState);

    // METHODS

    // renderBackground() returns a className and sets the 
    // background image based on temperature.

    const renderBackground = () => {
        const max_temp = 15;
        if(!state.weatherInfo) return `container-fluid ${styles.cold}`;
        else if(state.weatherInfo.forecast.forecastday[0].day.avgtemp_c > max_temp) return `container-fluid ${styles.cold} ${styles.warm}`; 
        else return `container-fluid ${styles.cold}`;
    }

    // handleLocation() changes the location property on globalState.js 
    // and is triggered when user types each letter of the wanted location on input.
    
    const handleLocation = e => {
        setState({
            ...state,
            location: e.target.value
        });
    }

    return(
        <AppContext.Provider value={{
            state, 
            setState, 
            handleLocation
        }}>
            <div id={styles.mainContainer} className={renderBackground()}>
                <Header />
                <Page />
            </div>
        </AppContext.Provider>
    )
}

export default App;