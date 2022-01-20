import React from "react";
import { useContext } from "react";
import { AppContext } from "../App/App";
import SecondDay from "./Days/SecondDay";
import ThirdDay from "./Days/ThirdDay";
import './forecastStyles.css';

function Forecast() {
    const {state: {weatherInfo, isLoading, requestErrorWasFound}} = useContext(AppContext);
    return(
        weatherInfo && !isLoading && !requestErrorWasFound ? 

            <div className="col-12 col-lg-6 forecast-container-styles">
                <SecondDay />
                <ThirdDay />
            </div>

        : null
    )
}

export default Forecast;