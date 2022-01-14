import React from "react";
import axios from "axios";
import { useEffect, useContext } from "react";
import { AppContext } from "../App/App";
import './searcherStyles.css';

function Searcher() {
    
    const {
        state,
        state: {
            base_url,
            apiMethod, 
            access_token, 
            forecastDays, 
            location
        },  
        setState
    } = useContext(AppContext);
    
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
                <form onSubmit={handleRequest} className="form-styles">
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
    
    // handleRequest() sets isLoading property to true and activates the loader.
    // Then, sends a GET request to weatherapi API and sets the requestErrorWasFound 
    // property to false and also, modifies the weatherInfo property on globalState.js.
    // In case of error, isLoading property is set to false and requestErrorWasFound property 
    // is set to true. Function is triggered when user submits the form, either clicking
    // the submit button or pressing the enter key.
    
    
    function handleRequest(e) {
        e.preventDefault();
        setState({
            ...state,
            isLoading: true
        });
        axios.get(`${base_url}${apiMethod}?key=${access_token}&days=${forecastDays}&q=${location}`)
            .then(response => {
                console.log(response);
                setState({
                    ...state,
                    weatherInfo: response.data,
                    requestErrorWasFound: false
                });
            }).catch(() => {
            setState({
                ...state,
                isLoading: false,
                requestErrorWasFound: true
            })
        })
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