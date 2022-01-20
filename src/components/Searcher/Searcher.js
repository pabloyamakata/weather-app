import React from "react";
import { useEffect, useContext } from "react";
import { AppContext } from "../App/App";
import useAxios from "../../hooks/useAxios";
import './searcherStyles.css';

function Searcher() {
    const {state, state: {location}, setState} = useContext(AppContext);
    const {axiosGet} = useAxios();

    // This function sends a GET request to weatherapi API on first 
    // render. It takes user's IP address as main parameter in order
    // to display weather data based on user's location.  

    useEffect(() => {
        axiosGet('auto:ip');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    
    // This function sets isLoading property to false and deactivates 
    // the loader after the request to weatherapi API has been successful.
    
    useEffect(() => {
        setState({
            ...state,
            isLoading: false
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.weatherInfo]);
    
    return(
        <div className="row">
            <div className="col">
                <form 
                onSubmit={event => {
                    event.preventDefault(); 
                    axiosGet(location)
                }} 
                className="form-styles">
                    
                    <input 
                    type='text'
                    onChange={handleLocation}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    placeholder="Search for location..." 
                    className="searcher-styles" 
                    required />
                
                    <button 
                    type='submit'
                    className="searcher-submit-styles">
                    <i className="fas fa-search"></i>
                    </button>
                </form>
            </div>
        </div>
    )
    
    // METHODS

    // handleLocation() changes the location property on globalState.js 
    // and is triggered when user types each letter of the wanted location on input.
    
    function handleLocation(e) {
        setState({
            ...state,
            location: e.target.value
        });
    }

    // Both functions, handleInputFocus() and handleInputBlur(), have the purpose 
    // of giving styles to the submit button located inside the form. handleInputFocus()
    // adds a new CSS class to the aforementioned button and provides it with a brighter 
    // bottom border after the input has received focus. When input loses its focus, 
    // handleInputBlur() does the opposite operation. 

    function handleInputFocus() {
        let btn_submit = document.querySelector('.searcher-submit-styles');
        btn_submit.classList.add('searcher-submit-styles-focus');
    }

    function handleInputBlur() {
        let btn_submit = document.querySelector('.searcher-submit-styles');
        btn_submit.classList.remove('searcher-submit-styles-focus');
    }
}

export default Searcher;