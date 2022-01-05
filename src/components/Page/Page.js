import React from "react";
import Searcher from "../Searcher/Searcher";
import Loader from "../Loader/Loader";
import Weather from "../Weather/Weather";
import Error from "../Error/Error";

function Page() {
    return(
        <div>
            <Searcher />
            <Loader />
            <Weather />
            <Error />
        </div>
    )
}

export default Page;