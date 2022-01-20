import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App/App';
import useDate from '../../hooks/useDate';
import './locationStyles.css';

function Location() {
    const {state: {weatherInfo, isLoading, requestErrorWasFound}} = useContext(AppContext);
    const {renderDay, renderDate, renderMonth, renderYear} = useDate();
    return(

        weatherInfo && !isLoading && !requestErrorWasFound ?

        <div className="row">
            <div className="col location-container-styles">
                <h3 className="location-styles">{weatherInfo.location.name}, {weatherInfo.location.country}</h3>
                <div className="current-date-container-styles">
                    <p>
                    <span className="current-day-styles">{renderDay(0)}</span>
                    <span className="current-date-styles">{renderDate(0)}</span>
                    <span className="current-month-styles">{renderMonth(0)}</span>
                    <span className="current-year-styles">{renderYear(0)}</span>
                    </p>
                </div>
            </div>
        </div>

        : null
    )
}

export default Location;