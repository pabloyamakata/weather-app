import React from "react";
import { useContext } from "react";
import { AppContext } from "../App/App";
import useTemperature from "../../hooks/useTemperature";
import useImage from "../../hooks/useImage";
import styles from './Current.module.css';

function Current() {
    const {state: {weatherInfo, isLoading, requestErrorWasFound}} = useContext(AppContext);
    const {renderMinTemp, renderMaxTemp, renderMainTemp} = useTemperature();
    const {getMomentOfTheDay, getIconCode} = useImage();

    return(
        weatherInfo && !isLoading && !requestErrorWasFound ? 
        
            <div className={`col-12 col-lg-6 ${styles.mainContainer}`}>
                <div className={styles.secondContainer}>
                    <div className={styles.weatherData}>
                        <img 
                        src={`https://cdn.weatherapi.com/weather/128x128/${getMomentOfTheDay()}/${getIconCode(0)}`} 
                        alt="Weather condition icon" />
                        <div className={styles.temperatureContainer}>
                            <p className={styles.mainTemperature}>{renderMainTemp(0)}°c</p>
                            <div>
                                <p className={styles.maxTemperature}>{renderMaxTemp(0)}°c</p>
                                <p className={styles.minTemperature}>{renderMinTemp(0)}°c</p>
                            </div>
                        </div>
                    </div>
                    <p className={styles.weatherCondition}>{weatherInfo.current.condition.text}</p>
                </div>
            </div>         
        
        : null
    )
}

export default Current;