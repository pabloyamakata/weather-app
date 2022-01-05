import React from "react";
import { useContext } from "react";
import { AppContext } from "../App/App";
import './weatherStyles.css';

function Weather() {
    const value = useContext(AppContext);
    const state = value.state; 
    const weatherInfo = state.weatherInfo;
    const isLoading = state.isLoading;
    const requestErrorWasFound = state.requestErrorWasFound;

    return(
        weatherInfo && !isLoading && !requestErrorWasFound ? 
        
        <div className="row">
            <div className="col main-container-styles">
                <h3 className="location-styles">{weatherInfo.name}, {weatherInfo.sys.country}</h3>
                <p className="current-date-styles">{renderCurrentDate()}</p>
                <div className="temperature-container-styles">
                    <p className="main-temperature-styles">{renderMainTemp()}°c</p>
                    <div className="min-max-container-styles">
                        <div className="min-temperature-container-styles">
                            <p className="min-temperature-title-styles">Min</p>
                            <p className="min-temperature-degree-styles">{renderMinTemp()}°c</p>
                        </div>
                        <div className="max-temperature-container-styles">
                            <p className="max-temperature-title-styles">Max</p>
                            <p className="max-temperature-degree-styles">{renderMaxTemp()}°c</p>
                        </div>
                    </div>
                </div>
                <p className="weather-condition-styles">{renderWeatherDescription()}</p>
            </div>            
        </div>
        
        : null
    )

    // METHODS

    // renderCurrentDate()

    function renderCurrentDate() {
        /*const months = [
            'January', 'February', 'March', 'April', 'May', 'June', 'July', 
            'August', 'September', 'October', 'November', 'December'
        ];*/
        // let dateObject = new Date();
        // let date = dateObject.getDate();
        // let year = dateObject.getFullYear();
        return 'Saturday 14 January 2021';
    }

    // renderMainTemp() rounds the main temperature received from the API 
    // response and returns its value so it can be rendered.

    function renderMainTemp() {
        const main_temp = Math.round(weatherInfo.main.temp);
        return main_temp; 
    }

    // renderMinTemp() rounds the minimum temperature received from the API 
    // response and returns its value so it can be rendered.

    function renderMinTemp() {
        const min_temp = Math.round(weatherInfo.main.temp_min);
        return min_temp;
    }

    // renderMaxTemp() rounds the maximum temperature received from the API 
    // response and returns its value so it can be rendered.

    function renderMaxTemp() {
        const max_temp = Math.round(weatherInfo.main.temp_max);
        return max_temp;
    }

    // renderWeatherDescription() turns the first letter of the weather description
    // into a capital letter and then, returns the whole string with the new value.

    function renderWeatherDescription() {
        let weatherDescription = weatherInfo.weather[0]['description'];
        let firstLetter = weatherDescription.charAt(0).toUpperCase();
        let newDescription = firstLetter + weatherDescription.slice(1);
        return newDescription;
    }
}

export default Weather;