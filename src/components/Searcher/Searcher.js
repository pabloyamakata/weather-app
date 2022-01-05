import React from "react";
import axios from "axios";
import { useEffect, useContext } from "react";
import { AppContext } from "../App/App";
import './searcherStyles.css';

function Searcher() {
    
    const value = useContext(AppContext);
    const state = value.state;
    const setState = value.setState;
    const base_url = value.state.base_url;
    const access_token = value.state.access_token;
    const location = state.location;
    const degreeScale = state.degreeScale;
    const languageSupported = state.languageSupported;
    
    // This function sets isLoading property to false and deactivates 
    // the loader after the request to openweathermap API has been successful.
    
    useEffect(() => {
        setState({
            ...state,
            isLoading: false
        })
    }, [state.weatherInfo]);
    
    return(
        <div className="row">
            <div className="col">
                <form onSubmit={handleRequest} className="form-style">
                    <input 
                    type='text'
                    onChange={handleLocation} 
                    placeholder="Search for location..." 
                    className="form-control form-control-sm searcher-style" 
                    required />
                    
                    <button 
                    type='submit'
                    className="btn btn-sm searcher-submit-style">
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
    // Then, sends a GET request to openweathermap API and sets the 
    // requestErrorWasFound property to false and also, modifies the weatherInfo property on globalState.js.
    // In case of error, isLoading property is set to false and requestErrorWasFound property 
    // is set to true. Function is triggered when user submits the form, either clicking
    // the submit button or pressing the enter key.
    
    
    function handleRequest(e) {
        e.preventDefault();
        setState({
            ...state,
            isLoading: true
        });
        axios(`${base_url}q=${location}&appid=${access_token}&units=${degreeScale}&lang=${languageSupported}`)
            .then(response => {
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
}

export default Searcher;