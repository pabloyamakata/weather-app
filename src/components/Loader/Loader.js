import React from "react";
import { useContext } from "react";
import { AppContext } from "../App/App";
import './loaderStyles.css';

function Loader() {  
    const value = useContext(AppContext);
    const isLoading = value.state.isLoading;  
    return(
        isLoading ? <div className="row">
                        <div className="col loader-container-styles">
                            <i className="far fa-snowflake fa-spin loader-styles"></i> 
                        </div>
                    </div> : null
    )
}

export default Loader;