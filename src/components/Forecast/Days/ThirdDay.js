import React from "react";
import useDate from "../../../hooks/useDate";
import useTemperature from "../../../hooks/useTemperature";
import useImage from "../../../hooks/useImage";
import './thirdDayStyles.css';

function ThirdDay() {
    const {renderDay, renderDate} = useDate();
    const {renderMin, renderMax} = useTemperature();
    const {getIcon} = useImage();
    return(
        <div className="third-day-container-styles">
            <div className="third-day-date-container-styles">
                <p className="third-day-date-styles">
                    <span className="third-day-day-styles">{renderDay(2)}</span>
                    <span className="third-day-date-number-styles">{renderDate(2)}</span>
                </p>
            </div>
            <div className="third-day-min-max-container-styles">
                <p className="third-day-min-max-styles">
                    <span className="third-day-min-styles">{renderMin(2)}</span>
                    <span className="third-day-max-styles">{renderMax(2)}</span>
                </p>
            </div>
            <div className="third-day-weather-icon-container-styles">
                <img
                src={`https://cdn.weatherapi.com/weather/64x64/day/${getIcon(2)}`}
                alt="Weather condition icon" />
            </div>
        </div>
    )
}

export default ThirdDay;