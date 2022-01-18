import React from "react";
import { useContext } from "react";
import { AppContext } from "../App/App";
import './mapStyles.css';

function Map() {
    const {state: {weatherInfo, isLoading, requestErrorWasFound}} = useContext(AppContext);
    return(
        weatherInfo && !isLoading && !requestErrorWasFound ? 

        <div className="row row-spacing-top">
            <div className="col map-container-styles">
                <p className="map-styles">Here goes google maps</p>
            </div>
        </div>

        : null
    )
}

export default Map;