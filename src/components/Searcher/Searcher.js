import React from "react";
import { useEffect, useContext, useRef } from "react";
import { AppContext } from "../App/App";
import useAxios from "../../hooks/useAxios";
import styles from './Searcher.module.css';

function Searcher() {
    const { state: { location }, handleLocation } = useContext(AppContext);
    
    const { axiosGet } = useAxios();

    // This function sends a GET request to weatherapi API on first 
    // render. It takes user's IP address as main parameter in order
    // to display weather data based on user's location.  

    useEffect(() => {
        axiosGet('auto:ip');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    
    // Both methods, handleInputFocus() and handleInputBlur(), have the purpose 
    // of giving styles to the submit button located inside the form. handleInputFocus()
    // adds a new CSS class to the aforementioned button and provides it with a brighter 
    // bottom border after the input has received focus. When input loses its focus, 
    // handleInputBlur() does the opposite operation. Note that the useRef hook was 
    // implemented to find the button in the DOM tree. 

    const btn_submit = useRef();

    const handleInputFocus = () => {
        btn_submit.current.classList.add(`${styles.btnSubmitFocus}`);
    }

    const handleInputBlur = () => {
        btn_submit.current.classList.remove(`${styles.btnSubmitFocus}`);
    }

    return(
        <div className="row">
            <div className="col">
                <form 
                onSubmit={event => {
                    event.preventDefault(); 
                    axiosGet(location);
                }} 
                className={styles.form}>
                    
                    <input 
                    type='text'
                    onChange={handleLocation}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    placeholder="Search for location..." 
                    className={styles.searcher} 
                    required />
                
                    <button 
                    type='submit'
                    ref={btn_submit}
                    className={styles.btnSubmit}>
                    <i className="fas fa-search"></i>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Searcher;