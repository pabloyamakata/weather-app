import React from 'react';
import styles from './Header.module.css';

function Header() {
    return(
        <div className='row'>
            <header className={`col ${styles.header}`}>
                <h1 className={styles.title}>Weather App</h1>
            </header>
        </div>
    )
}

export default Header;