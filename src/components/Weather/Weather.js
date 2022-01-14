import React from "react";
import { useContext } from "react";
import { AppContext } from "../App/App";
import './weatherStyles.css';

function Weather() {
    const {state: {weatherInfo, isLoading, requestErrorWasFound}} = useContext(AppContext);

    return(
        weatherInfo && !isLoading && !requestErrorWasFound ? 
        
        <div className="row">
            <div className="col main-container-styles">
                <h3 className="location-styles">{weatherInfo.location.name}, {weatherInfo.location.country}</h3>
                <div className="current-date-container-styles">{renderCurrentDate()}</div>
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
        
        : null
    )

    // METHODS

    // renderCurrentDate() makes use of JavaScript Date object and its corresponding methods
    // in order to return the current day, date, month and year.

    function renderCurrentDate() {
        const days = [
            'Sunday', 'Monday', 'Tuesday', 'Wednesday', 
            'Thursday', 'Friday', 'Saturday'
        ];
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June', 'July', 
            'August', 'September', 'October', 'November', 'December'
        ];
        let dateObject = new Date();
        let day = days[dateObject.getDay()];
        let date = dateObject.getDate();
        let month = months[dateObject.getMonth()];
        let year = dateObject.getFullYear();
        return  <p>
                <span className="current-day-styles">{day}</span>
                <span className="current-date-styles">{date}</span>
                <span className="current-month-styles">{month}</span>
                <span className="current-year-styles">{year}</span>
                </p>;
    }

    // renderMinTemp() rounds the min temperature received from the API 
    // response and returns its value so it can be rendered.

    function renderMinTemp() {
        const min_temp = Math.round(weatherInfo.forecast.forecastday[0].day.mintemp_c);
        return min_temp;
    }

    // renderMaxTemp() rounds the max temperature received from the API 
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
}

export default Weather;