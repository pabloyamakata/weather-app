import React from "react";
import { useContext } from "react";
import { AppContext } from "../App/App";
import styles from './Loader.module.css';

function Loader() {  
    const {state: {isLoading}} = useContext(AppContext);  
    return(
        isLoading ? <div className="row">
                        <div className={`col ${styles.loaderContainer}`}>
                            <i className={`fas fa-spinner fa-pulse ${styles.loader}`}></i>
                        </div>
                    </div> 
                    
                    : null
    )
}

export default Loader;