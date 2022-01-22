import React from "react";
import useDate from "../../../hooks/useDate";
import useTemperature from "../../../hooks/useTemperature";
import useImage from "../../../hooks/useImage";
import './secondDayStyles.css';

function SecondDay() {
    const {renderDay, renderDate} = useDate();
    const {renderMinTemp, renderMaxTemp, renderMainTemp} = useTemperature();
    const {getIconCode} = useImage();
    return(
        <div className="second-day-container-styles">
            <div className="second-day-date-container-styles">
                <span className="second-day-dayname-styles">{renderDay(1)}</span>
                <span className="second-day-date-styles">{renderDate(1)}</span>
            </div>
            <div className="second-day-weather-data-container-styles">
                <div className="second-day-main-temperature-container-styles">
                    <span className="second-day-main-temperature-styles">{renderMainTemp(1)}°c</span>
                </div>
                <div className="second-day-min-max-container-styles">
                    <div className="second-day-max-container-styles">
                        <i className="fas fa-angle-double-up"></i>
                        <p className="second-day-max-styles">{renderMaxTemp(1)}°c</p>
                    </div>
                    <div className="second-day-min-container-styles">
                        <i className="fas fa-angle-double-down"></i>
                        <p className="second-day-min-styles">{renderMinTemp(1)}°c</p>
                    </div>
                </div>
                <div className="second-day-weather-icon-container-styles">
                    <img
                    src={`https://cdn.weatherapi.com/weather/64x64/day/${getIconCode(1)}`}
                    alt="Weather condition icon" />
                </div>
            </div>
        </div>
    )
}
                

export default SecondDay;