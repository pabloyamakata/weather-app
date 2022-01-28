import React from "react";
import { useContext } from "react";
import { AppContext } from "../App/App";
import Days from "./Days/Days";
import styles from './Forecast.module.css';

function Forecast() {
    const {state: {weatherInfo, isLoading, requestErrorWasFound}} = useContext(AppContext);
    return(
        weatherInfo && !isLoading && !requestErrorWasFound ? 

            <div className={`col-12 col-lg-6 ${styles.forecastContainer}`}>
                <Days day={1} marginTop={{marginTop: 0}} />
                <Days day={2} marginTop={{marginTop: '.8rem'}} />
            </div>

        : null
    )
}

export default Forecast;