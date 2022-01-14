import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App/App';
import './locationStyles.css';

function Location() {
    const {state: {weatherInfo, isLoading, requestErrorWasFound}} = useContext(AppContext);
    return(

        weatherInfo && !isLoading && !requestErrorWasFound ?

        <div className="row">
            <div className="col location-container-styles">
                <h3 className="location-styles">{weatherInfo.location.name}, {weatherInfo.location.country}</h3>
                <div className="current-date-container-styles">{renderCurrentDate()}</div>
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
}

export default Location;