import React from "react";
import useDate from "../../../hooks/useDate";
import useTemperature from "../../../hooks/useTemperature";
import useImage from "../../../hooks/useImage";
import styles from './Days.module.css';

function Days(props) {
    const {renderDay, renderDate} = useDate();
    const {renderMinTemp, renderMaxTemp, renderMainTemp} = useTemperature();
    const {getIconCode} = useImage();
    return(
        <div className={styles.mainContainer} style={props.marginTop}>
            <div className={styles.dateContainer}>
                <span className={styles.dayName}>{renderDay(props.day)}</span>
                <span className={styles.date}>{renderDate(props.day)}</span>
            </div>
            <div className={styles.weatherData}>
                <div>
                    <span className={styles.mainTemperature}>{renderMainTemp(props.day)}°c</span>
                </div>
                <div className={styles.minMaxContainer}>
                    <div className={styles.maxContainer}>
                        <i className={`fas fa-angle-double-up ${styles.arrowUp}`}></i>
                        <p className={styles.maxTemperature}>{renderMaxTemp(props.day)}°c</p>
                    </div>
                    <div className={styles.minContainer}>
                        <i className={`fas fa-angle-double-down ${styles.arrowDown}`}></i>
                        <p className={styles.minTemperature}>{renderMinTemp(props.day)}°c</p>
                    </div>
                </div>
                <div className={styles.iconContainer}>
                    <img
                    src={`https://cdn.weatherapi.com/weather/64x64/day/${getIconCode(props.day)}`}
                    alt="Weather condition icon" />
                </div>
            </div>
        </div>
    )
}
                

export default Days;