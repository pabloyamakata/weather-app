import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App/App';
import useDate from '../../hooks/useDate';
import styles from './Location.module.css';

function Location() {
    const {state: {weatherInfo, isLoading, requestErrorWasFound}} = useContext(AppContext);
    const {renderDay, renderDate, renderMonth, renderYear} = useDate();
    return(

        weatherInfo && !isLoading && !requestErrorWasFound ?

        <div className="row">
            <div className={`col ${styles.mainContainer}`}>
                <h3 className={styles.location}>{weatherInfo.location.name}, {weatherInfo.location.country}</h3>
                <div className={styles.currentDateContainer}>
                    <p>
                    <span>{renderDay(0)}</span>
                    <span className={styles.currentDate}>{renderDate(0)}</span>
                    <span className={styles.currentMonth}>{renderMonth(0)}</span>
                    <span className={styles.currentYear}>{renderYear(0)}</span>
                    </p>
                </div>
            </div>
        </div>

        : null
    )
}

export default Location;