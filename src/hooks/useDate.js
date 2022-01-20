import { useContext } from "react";
import { AppContext } from "../components/App/App";

function useDate() {
    const {state: {weatherInfo}} = useContext(AppContext);
    
    const days = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 
        'Thursday', 'Friday', 'Saturday'
    ];
    
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 
        'August', 'September', 'October', 'November', 'December'
    ];

    const renderDay = selectedDay => {
        const dateStringFromAPI = weatherInfo.forecast.forecastday[selectedDay].date;
        const dateObject = new Date(dateStringFromAPI.replace(/-/g, '/'));
        const day = days[dateObject.getDay()];
        return day;
    }

    const renderDate = selectedDay => {
        const dateStringFromAPI = weatherInfo.forecast.forecastday[selectedDay].date;
        const dateObject = new Date(dateStringFromAPI.replace(/-/g, '/'));
        const date = dateObject.getDate();
        return date;    
    }

    const renderMonth = selectedDay => {
        const dateStringFromAPI = weatherInfo.forecast.forecastday[selectedDay].date;
        const dateObject = new Date(dateStringFromAPI.replace(/-/g, '/'));
        let month = months[dateObject.getMonth()];
        return month;
    }

    const renderYear = selectedDay => {
        const dateStringFromAPI = weatherInfo.forecast.forecastday[selectedDay].date;
        const dateObject = new Date(dateStringFromAPI.replace(/-/g, '/'));
        let year = dateObject.getFullYear();
        return year;
    }

    return {renderDay, renderDate, renderMonth, renderYear};
}

export default useDate;