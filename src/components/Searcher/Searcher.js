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
    // This function sets isLoading property to false and deactivates 
    // the loader after the request to openweathermap API has been made.
    useEffect(() => {
        setState({
            ...state,
            isLoading: false
        })
    }, [state.weatherInfo]);
    return(
        <div className="row">
            <div className="col">
                <form className="form-style">
                    <input 
                    type='text'
                    onChange={handleSearch} 
                    placeholder="Search for location..." 
                    className="form-control form-control-sm searcher-style" 
                    required />
                    
                    <input 
                    type='button'
                    onClick={handleRequest}
                    onKeyPress={handleEnter}
                    className="btn btn-sm searcher-submit-style" 
                    value='SEARCH' />
                </form>
            </div>
        </div>
    )
    
    // METHODS

    // It changes the location property on globalState.js 
    // and is triggered when user types each letter of the wanted location on input.
    function handleSearch(e) {
        setState({
            ...state,
            location: e.target.value
        });
    }
    // It sends a GET request to openweathermap API and sets the 
    // weatherInfo property on globalState.js. It is triggered when user clicks on submit button.
    // This function also sets isLoading property to true and activates the loader.
    function handleRequest() {
        setState({
            ...state,
            isLoading: true
        });
        axios(`${base_url}q=${location}&appid=${access_token}&units=${degreeScale}`)
        .then(response => setState({
            ...state,
            weatherInfo: response.data
        }));
    }
    // Why this doesn't work?! It only works when I add event listener to document object.
    function handleEnter(e) {
        if (e.key === 'Enter') {
            alert('done!!!');
        }
    }
}

export default Searcher;