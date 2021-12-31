import React from "react";
import { useContext } from "react";
import { AppContext } from "../App/App";
import './errorStyles.css';

function Error() {

    const value = useContext(AppContext);
    const errorFound = value.state.errorFound;
    const isLoading = value.state.isLoading;

    return(

        errorFound && !isLoading ?

                    <div className="row">
                        <div className="col error-container-styles">
                            <h3 className="error-styles">Ups! There has been an error...</h3>
                        </div>
                    </div>

        : null
    )
}

export default Error;