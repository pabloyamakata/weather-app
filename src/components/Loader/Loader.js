import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import './loaderStyles.css';

function Loader() {  
    const state = useContext(AppContext);  
    return(
        state.isLoading ? <i class="far fa-snowflake fa-spin"></i> : null
    )
}

export default Loader;