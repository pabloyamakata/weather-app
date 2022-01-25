import React from "react";
import { useState, createContext } from "react";
import { globalState } from "../../globalState";
import Header from '../Header/Header';
import Page from "../Page/Page";
import './appStyles.css';

export const AppContext = createContext(null);

function App() {
    const [state, setState] = useState(globalState);

    // METHODS

    // renderBackground() returns a className and sets the 
    // background image based on temperature.

    const renderBackground = () => {
        const max_temp = 15;
        if(!state.weatherInfo) return 'container-fluid app-cold';
        else if(state.weatherInfo.forecast.forecastday[0].day.avgtemp_c > max_temp) return 'container-fluid app-cold app-warm'; 
        else return 'container-fluid app-cold';
    }

    // handleLocation() changes the location property on globalState.js 
    // and is triggered when user types each letter of the wanted location on input.
    
    const handleLocation = e => {
        setState({
            ...state,
            location: e.target.value
        });
    }

    // Both methods, handleInputFocus() and handleInputBlur(), have the purpose 
    // of giving styles to the submit button located inside the form. handleInputFocus()
    // adds a new CSS class to the aforementioned button and provides it with a brighter 
    // bottom border after the input has received focus. When input loses its focus, 
    // handleInputBlur() does the opposite operation. 

    const handleInputFocus = () => {
        let btn_submit = document.querySelector('.searcher-submit-styles');
        btn_submit.classList.add('searcher-submit-styles-focus');
    }

    const handleInputBlur = () => {
        let btn_submit = document.querySelector('.searcher-submit-styles');
        btn_submit.classList.remove('searcher-submit-styles-focus');
    }

    return(
        <AppContext.Provider value={{
            state, 
            setState, 
            handleLocation, 
            handleInputFocus, 
            handleInputBlur
        }}>
            <div id="main-container" className={renderBackground()}>
                <Header />
                <Page />
            </div>
        </AppContext.Provider>
    )
}

export default App;