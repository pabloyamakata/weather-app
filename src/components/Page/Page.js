import React from "react";
import Searcher from "../Searcher/Searcher";
import Location from "../Location/Location";
import Loader from "../Loader/Loader";
import Current from "../Current/Current";
import Forecast from "../Forecast/Forecast";
import Map from "../Map/Map";
import Error from "../Error/Error";
import Footer from "../Footer/Footer";
import styles from './Page.module.css';

function Page() {
    return(
        <div className={styles.page}>
            <Searcher />
            <Location />
            <Loader />
            <div className={`row ${styles.mainRow}`}>
                <Current />
                <Forecast />
            </div>
            <Map />
            <Error />
            <Footer />
        </div>
    )
}

export default Page;