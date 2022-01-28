import React from "react";
import useDate from "../../../hooks/useDate";
import useTemperature from "../../../hooks/useTemperature";
import useImage from "../../../hooks/useImage";
import styles from './Third.module.css';

function Third() {
    const {renderDay, renderDate} = useDate();
    const {renderMinTemp, renderMaxTemp, renderMainTemp} = useTemperature();
    const {getIconCode} = useImage();
    return(
        <div className={styles.mainContainer}>
            <div className={styles.dateContainer}>
                <span className={styles.dayName}>{renderDay(2)}</span>
                <span className={styles.date}>{renderDate(2)}</span>
            </div>
            <div className={styles.weatherData}>
                <div>
                    <span className={styles.mainTemperature}>{renderMainTemp(2)}°c</span>
                </div>
                <div className={styles.minMaxContainer}>
                    <div className={styles.maxContainer}>
                        <i className={`fas fa-angle-double-up ${styles.arrowUp}`}></i>
                        <p className={styles.maxTemperature}>{renderMaxTemp(2)}°c</p>
                    </div>
                    <div className={styles.minContainer}>
                        <i className={`fas fa-angle-double-down ${styles.arrowDown}`}></i>
                        <p className={styles.minTemperature}>{renderMinTemp(2)}°c</p>
                    </div>
                </div>
                <div className={styles.iconContainer}>
                    <img
                    src={`https://cdn.weatherapi.com/weather/64x64/day/${getIconCode(2)}`}
                    alt="Weather condition icon" />
                </div>
            </div>
        </div>
    )
}

export default Third;