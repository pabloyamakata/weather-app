import React from "react";
import Searcher from "../Searcher/Searcher";
import Loader from "../Loader/Loader";
import Forecast from "../Forecast/Forecast";

function Page() {
    return(
            <div>
                <Searcher />
                <Loader />
                <Forecast />
            </div>
            /* forecast */
            /* error */
    )
}

export default Page;