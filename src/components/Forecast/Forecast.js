import React from "react";
import { useContext } from "react";
import { AppContext } from "../App/App";
import Second from "./Days/Second";
import Third from "./Days/Third";
import styles from './Forecast.module.css';

function Forecast() {
    const {state: {weatherInfo, isLoading, requestErrorWasFound}} = useContext(AppContext);
    return(
        weatherInfo && !isLoading && !requestErrorWasFound ? 

            <div className={`col-12 col-lg-6 ${styles.forecastContainer}`}>
                <Second />
                <Third />
            </div>

        : null
    )
}

export default Forecast;