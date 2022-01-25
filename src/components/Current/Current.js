import React from "react";
import { useContext } from "react";
import { AppContext } from "../App/App";
import useTemperature from "../../hooks/useTemperature";
import useImage from "../../hooks/useImage";
import './currentStyles.css';

function Current() {
    const {state: {weatherInfo, isLoading, requestErrorWasFound}} = useContext(AppContext);
    const {renderMinTemp, renderMaxTemp, renderMainTemp} = useTemperature();
    const {getMomentOfTheDay, getIconCode} = useImage();

    return(
        weatherInfo && !isLoading && !requestErrorWasFound ? 
        
            <div className="col-12 col-lg-6 main-container-styles">
                <div className="second-container-styles">
                    <div className="temperature-container-styles">
                        <img 
                        src={`https://cdn.weatherapi.com/weather/128x128/${getMomentOfTheDay()}/${getIconCode(0)}`} 
                        alt="Weather condition icon" />
                        <div className="min-max-main-container-styles">
                            <p className="main-temperature-styles">{renderMainTemp(0)}°c</p>
                            <div className="min-max-container-styles">
                                <p className="max-temperature-styles">{renderMaxTemp(0)}°c</p>
                                <p className="min-temperature-styles">{renderMinTemp(0)}°c</p>
                            </div>
                        </div>
                    </div>
                    <p className="weather-condition-styles">{weatherInfo.current.condition.text}</p>
                </div>
            </div>         
        
        : null
    )
}

export default Current;