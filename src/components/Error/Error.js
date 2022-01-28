import React from "react";
import { useContext } from "react";
import { AppContext } from "../App/App";
import styles from './Error.module.css';

function Error() {
    const {state: {requestErrorWasFound, isLoading}} = useContext(AppContext);
    
    return(
        requestErrorWasFound && !isLoading ?
                    
                    <div className="row">
                        <div className={`col ${styles.errorContainer}`}>
                            <h3 className={styles.error}>Oops! There has been an error...</h3>
                        </div>
                    </div>

                    : null
    )
}

export default Error;