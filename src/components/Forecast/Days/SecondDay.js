import React from "react";
import useDate from "../../../hooks/useDate";
import useTemperature from "../../../hooks/useTemperature";
import useImage from "../../../hooks/useImage";
import './secondDayStyles.css';

function SecondDay() {
    const {renderDay, renderDate} = useDate();
    const {renderMinTemp, renderMaxTemp} = useTemperature();
    const {getIconCode} = useImage();
    return(
        <div className="tomorrow-container-styles">
            <div className="tomorrow-date-container-styles">
                <p className="tomorrow-date-styles">
                    <span className="tomorrow-day-styles">{renderDay(1)}</span>
                    <span className="tomorrow-date-number-styles">{renderDate(1)}</span>
                </p>
            </div>
            <div className="tomorrow-min-max-container-styles">
                <p className="tomorrow-min-max-styles">
                    <span className="tomorrow-min-styles">{renderMinTemp(1)}</span>
                    <span className="tomorrow-max-styles">{renderMaxTemp(1)}</span>
                </p>
            </div>
            <div className="tomorrow-weather-icon-container-styles">
                <img
                src={`https://cdn.weatherapi.com/weather/64x64/day/${getIconCode(1)}`}
                alt="Weather condition icon" />
            </div>
        </div>
    )
}

export default SecondDay;