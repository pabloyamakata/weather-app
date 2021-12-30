import React from "react";
import axios from "axios";
import { useContext } from "react";
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
                    className="btn btn-sm searcher-submit-style" 
                    value='SEARCH' />
                </form>
            </div>
        </div>
    )
    // Methods
    function handleSearch(e) {
        setState({
            ...state,
            location: e.target.value
        });
    }
    // Why is setState not working??
    function handleRequest() {
        axios(`${base_url}q=${location}&appid=${access_token}&units=${degreeScale}`)
        .then(response => setState({
            ...state,
            weatherInfo: response.data
        }));
    }
}

export default Searcher;