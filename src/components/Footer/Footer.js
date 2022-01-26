import React from 'react';
import './footerStyles.css';

function Footer() {
    return(
        <footer className='row footer-row-styles'>
            <div className='col-12 col-md-6 copyright-container-styles'>
                <p className='copyright-styles'>&copy; 2022 Developed by Pablo Yamakata.</p>
            </div>
            <nav className='col-12 col-md-6 social-media-container-styles'>
                <ul className="nav">
                    <li className="nav-item">
                        <a
                        target="new" 
                        className="nav-link" 
                        href="https://www.linkedin.com/in/pabloyamakata/">
                        <i className="fab fa-linkedin"></i></a>
                    </li>
                    <li className="nav-item">
                        <a 
                        target="new"
                        className="nav-link" 
                        href="mailto:pablo.yamakata@gmail.com?Subject=Interested%20In%20Your%20Services">
                        <i className="far fa-envelope"></i></a>
                    </li>
                    <li className="nav-item">
                        <a 
                        target="new"
                        className="nav-link" 
                        href="https://github.com/pabloyamakata">
                        <i className="fab fa-github"></i></a>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;