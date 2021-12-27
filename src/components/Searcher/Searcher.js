import React from "react";
import './searcherStyles.css';

function Searcher() {
    return(
        <div className="row">
            <div className="col d-flex justify-content-center align-items-center searcher-spacing-top">
                <input type='text' placeholder="Search for location..." className="searcher-style"/>
                <input type='submit' value='Search' className="searcher-submit-style" />
            </div>
        </div>
    )
}

export default Searcher;