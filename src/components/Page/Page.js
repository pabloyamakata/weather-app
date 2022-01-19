import React from "react";
import Searcher from "../Searcher/Searcher";
import Location from "../Location/Location";
import Loader from "../Loader/Loader";
import Weather from "../Weather/Weather";
import Forecast from "../Forecast/Forecast";
import Error from "../Error/Error";

function Page() {
    return(
        <div>
            <Searcher />
            <Location />
            <Loader />
            <Weather />
            <Forecast />
            <Error />
        </div>
    )
}

export default Page;