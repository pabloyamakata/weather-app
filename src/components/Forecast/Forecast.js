import React from "react";
import { useContext } from "react";
import { AppContext } from "../App/App";
import './forecastStyles.css';

function Forecast() {
    const value = useContext(AppContext);
    const state = value.state; 
    const weatherInfo = state.weatherInfo;
    const isLoading = state.isLoading;
    return(
        weatherInfo && !isLoading ? 
        
        <div className="row">
            <div className="col">
                <p>Temp: {weatherInfo.main.temp} °C</p>
                <p>Feels like: {weatherInfo.main.feels_like} °C</p>
                <p>Min: {weatherInfo.main.temp_min} °C</p>
                <p>Max: {weatherInfo.main.temp_max} °C</p>
                <p>Pressure: {weatherInfo.main.pressure} hPa</p>
                <p>Humidity: {weatherInfo.main.humidity} g/m3</p>
            </div>            
        </div>
        
        : null
    )
}

export default Forecast;