import React from "react";
import useDate from "../../../hooks/useDate";
import useTemperature from "../../../hooks/useTemperature";
import useImage from "../../../hooks/useImage";
import './thirdDayStyles.css';

function ThirdDay() {
    const {renderDay, renderDate} = useDate();
    const {renderMinTemp, renderMaxTemp, renderMainTemp} = useTemperature();
    const {getIconCode} = useImage();
    return(
        <div className="third-day-container-styles">
            <div className="third-day-date-container-styles">
                <span className="third-day-dayname-styles">{renderDay(2)}</span>
                <span className="third-day-date-styles">{renderDate(2)}</span>
            </div>
            <div className="third-day-weather-data-container-styles">
                <div className="third-day-main-temperature-container-styles">
                    <span className="third-day-main-temperature-styles">{renderMainTemp(2)}°c</span>
                </div>
                <div className="third-day-min-max-container-styles">
                    <div className="third-day-max-container-styles">
                        <i className="fas fa-angle-double-up"></i>
                        <p className="third-day-max-styles">{renderMaxTemp(2)}°c</p>
                    </div>
                    <div className="third-day-min-container-styles">
                        <i className="fas fa-angle-double-down"></i>
                        <p className="third-day-min-styles">{renderMinTemp(2)}°c</p>
                    </div>
                </div>
                <div className="third-day-weather-icon-container-styles">
                    <img
                    src={`https://cdn.weatherapi.com/weather/64x64/day/${getIconCode(2)}`}
                    alt="Weather condition icon" />
                </div>
            </div>
        </div>
    )
}

export default ThirdDay;