import React from "react";
import Searcher from "../Searcher/Searcher";
import Location from "../Location/Location";
import Loader from "../Loader/Loader";
import Current from "../Current/Current";
import Forecast from "../Forecast/Forecast";
import Chart from "../Chart/Chart";
import Error from "../Error/Error";
import './pageStyles.css';

function Page() {
    return(
        <div>
            <Searcher />
            <Location />
            <Loader />
            <div className="row main-row-styles">
                <Current />
                <Forecast />
            </div>
            <Chart />
            <Error />
        </div>
    )
}

export default Page;