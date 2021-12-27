import React from 'react';
import './headerStyles.css';

function Header() {
    return(
        <div className='row'>
            <div className='col d-flex justify-content-center align-items-center header-spacing-top'>
                <h1 className='font-size'>Weather <span className='font-weight-bold'>Forecast</span></h1>
            </div>
        </div>
    )
}

export default Header;