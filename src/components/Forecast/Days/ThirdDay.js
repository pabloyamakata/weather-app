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
        <div>
            <div>
                <p>
                    <span>{renderDay(2)}</span>
                    <span>{renderDate(2)}</span>
                </p>
            </div>
            <div>
                <p>
                    <span>{renderMainTemp(2)}</span>
                </p>
                <div>
                    <div>
                        <i className="fas fa-angle-double-up"></i>
                        <p>{renderMaxTemp(2)}</p>
                    </div>
                    <div>
                        <i className="fas fa-angle-double-down"></i>
                        <p>{renderMinTemp(2)}</p>
                    </div>
                    <div>
                        <img
                        src={`https://cdn.weatherapi.com/weather/64x64/day/${getIconCode(2)}`}
                        alt="Weather condition icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdDay;