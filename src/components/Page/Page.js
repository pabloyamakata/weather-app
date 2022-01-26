import React from "react";
import Searcher from "../Searcher/Searcher";
import Location from "../Location/Location";
import Loader from "../Loader/Loader";
import Current from "../Current/Current";
import Forecast from "../Forecast/Forecast";
import Map from "../Map/Map";
import Error from "../Error/Error";
import Footer from "../Footer/Footer";
import './pageStyles.css';

function Page() {
    return(
        <div className="page-styles">
            <Searcher />
            <Location />
            <Loader />
            <div className="row main-row-styles">
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