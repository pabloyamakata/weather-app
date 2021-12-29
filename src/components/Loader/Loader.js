import React from "react";
import { useContext } from "react";
import { AppContext } from "../App/App";
import './loaderStyles.css';

function Loader() {  
    const value = useContext(AppContext);
    const isLoading = value.state.isLoading;  
    return(
        isLoading ? <i class="far fa-snowflake fa-spin"></i> : null
    )
}

export default Loader;