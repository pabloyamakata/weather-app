import React from "react";
import { useContext } from "react";
import { AppContext } from "../App/App";
import './weatherStyles.css';

function Weather() {
    const {state: {weatherInfo, isLoading, requestErrorWasFound}} = useContext(AppContext);

    return(
        weatherInfo && !isLoading && !requestErrorWasFound ? 
        
        <div className="row">
            <div className="col col-lg-6 main-container-styles">
                <div className="second-container-styles">
                    <div className="temperature-container-styles">
                        <img 
                        src={`https://cdn.weatherapi.com/weather/128x128/${provideMomentOfTheDay()}/${provideIconCode()}`} 
                        alt="Weather condition icon" />
                        <div className="min-max-main-container-styles">
                            <p className="main-temperature-styles">{renderMainTemp()}°c</p>
                            <div className="min-max-container-styles">
                                <p className="max-temperature-styles">{renderMaxTemp()}°c</p>
                                <p className="min-temperature-styles">{renderMinTemp()}°c</p>
                            </div>
                        </div>
                    </div>
                    <p className="weather-condition-styles">{weatherInfo.current.condition.text}</p>
                </div>
            </div>  
            <div className=" col col-lg-6 forecast-container-styles">
                <div className="tomorrow-container-styles">
                    <div className="tomorrow-date-container-styles">{renderTomorrowDate()}</div>
                    <div className="tomorrow-data-container-styles">
                        <p className="tomorrow-temperature-styles">{renderTomorrowTemperature()}°c</p>
                        <p className="tomorrow-description-styles">{weatherInfo.forecast.forecastday[1].day.condition.text}</p>
                        <img
                        className="tomorrow-icon-styles" 
                        src={`https://cdn.weatherapi.com/weather/64x64/day/${provideTomorrowIconCode()}`} 
                        alt="Weather condition icon" />
                    </div>
                </div>
                <div className="third-day-container-styles">
                    <div className="third-day-date-styles">{renderTomorrowDate()}</div>
                    <div className="third-day-data-container-styles">
                        <p className="third-day-temperature-styles">{renderTomorrowTemperature()}°c</p>
                        <p className="third-day-description-styles">{weatherInfo.forecast.forecastday[1].day.condition.text}</p>
                        <img
                        className="third-day-icon-styles" 
                        src={`https://cdn.weatherapi.com/weather/64x64/day/${provideTomorrowIconCode()}`} 
                        alt="Weather condition icon" />
                    </div>
                </div>
            </div>        
        </div>
        
        : null
    )

    // METHODS

    // renderMinTemp() rounds the minimum temperature received from the API 
    // response and returns its value so it can be rendered.

    function renderMinTemp() {
        const min_temp = Math.round(weatherInfo.forecast.forecastday[0].day.mintemp_c);
        return min_temp;
    }

    // renderMaxTemp() rounds the maximum temperature received from the API 
    // response and returns its value so it can be rendered.

    function renderMaxTemp() {
        const max_temp = Math.round(weatherInfo.forecast.forecastday[0].day.maxtemp_c);
        return max_temp;
    }

    // renderMainTemp() rounds the main temperature received from the API 
    // response and returns its value so it can be rendered.

    function renderMainTemp() {
        const main_temp = Math.round(weatherInfo.forecast.forecastday[0].day.avgtemp_c);
        return main_temp; 
    }

    // Inside the API response there´s a property called is_day that can 
    // contain either the value '1' or the value '0'. If this value is equal 
    // to '1', then the function provideMomentOfTheDay() returns a string-type 
    // variable with the value 'day'. Otherwise, a string-type variable with 
    // the value 'night' is returned. The purpose of this code is to provide 
    // necessary information to render either a night weather condition icon 
    // or a day weather condition icon.

    function provideMomentOfTheDay() {
        let isDay = weatherInfo.current.is_day;
        let momentOfTheDay = null;
        isDay ? momentOfTheDay = 'day' : momentOfTheDay = 'night';
        return momentOfTheDay;
    }

    // provideIconCode() converts the weather icon URL into an array and then,
    // returns a string-type variable named 'iconCode' that contains only the 
    // last section of the URL: the icon code (e.g. 133.jpg).

    function provideIconCode() {
        let iconURL = weatherInfo.current.condition.icon;
        let iconURL_isArray = iconURL.split('/');
        let iconCode = iconURL_isArray[6];
        return iconCode;
    }

    // renderTomorrowDate()

    function renderTomorrowDate() {
        const days = [
            'Sunday', 'Monday', 'Tuesday', 'Wednesday', 
            'Thursday', 'Friday', 'Saturday'
        ];
        
        let dateObject = new Date();
        let day;

        dateObject.getDay() == 6 ? day = days[dateObject.getDay() - 6] : 
        day = days[dateObject.getDay() + 1];

        let tomorrowDate = weatherInfo.forecast.forecastday[1].date;
        let tomorrowDate_isArray = tomorrowDate.split('-');
        let dayDate = tomorrowDate_isArray[2];
        return <p>
                    <span className="tomorrow-day-styles">{day}</span>
                    <span className="tomorrow-date-styles">{dayDate}</span>
               </p>;
    }

    // renderTomorrowTemperature()

    function renderTomorrowTemperature() {
        const tomorrow_temp = Math.round(weatherInfo.forecast.forecastday[1].day.avgtemp_c);
        return tomorrow_temp;
    }

    // provideTomorrowIconCode()

    function provideTomorrowIconCode() {
        let iconURL = weatherInfo.forecast.forecastday[1].day.condition.icon;
        let iconURL_isArray = iconURL.split('/');
        let iconCode = iconURL_isArray[6];
        return iconCode;
    }
}

export default Weather;