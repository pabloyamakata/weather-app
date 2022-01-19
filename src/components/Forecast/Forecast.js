import React from "react";
import { useContext } from "react";
import { AppContext } from "../App/App";
import SecondDay from "./Days/SecondDay";
import './forecastStyles.css';

function Forecast() {
    const {state: {weatherInfo, isLoading, requestErrorWasFound}} = useContext(AppContext);
    return(
        weatherInfo && !isLoading && !requestErrorWasFound ? 

        <div className="row">
            <div className="col forecast-container-styles">
                <SecondDay />
            </div>
        </div>

        : null
    )
}

export default Forecast;