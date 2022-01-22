import React from "react";
import { useContext } from "react";
import { AppContext } from '../App/App';
import './mapStyles.css';

function Map() {
    const {state: {weatherInfo, isLoading, requestErrorWasFound}} = useContext(AppContext);
    return(
        weatherInfo && !isLoading && !requestErrorWasFound ?

            <div className="row">
                <div className="col">
                    <p className="map">Hey! Here goes Map component!</p>
                </div>
            </div>

        : null
    )
}

export default Map;