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
        <div>
            <div>
                <p>
                    <span>{renderDay(1)}</span>
                    <span>{renderDate(1)}</span>
                </p>
            </div>
            <div>
                <p>
                    <span>{renderMainTemp(1)}</span>
                </p>
                <div>
                    <div>
                        <i className="fas fa-angle-double-up"></i>
                        <p>{renderMaxTemp(1)}</p>
                    </div>
                    <div>
                        <i className="fas fa-angle-double-down"></i>
                        <p>{renderMinTemp(1)}</p>
                    </div>
                    <div>
                        <img
                        src={`https://cdn.weatherapi.com/weather/64x64/day/${getIconCode(1)}`}
                        alt="Weather condition icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondDay;