import React from "react";
import Searcher from "../Searcher/Searcher";
import Loader from "../Loader/Loader";
import Forecast from "../Forecast/Forecast";
import Error from "../Error/Error";

function Page() {
    return(
        <div>
            <Searcher />
            <Loader />
            <Forecast />
            <Error />
        </div>
    )
}

export default Page;