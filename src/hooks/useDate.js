import { useContext } from "react";
import { AppContext } from "../components/App/App";

function useDate() {
    const {state: {weatherInfo}} = useContext(AppContext);

    const renderDay = selectedDay => {
        const dateStringFromAPI = weatherInfo.forecast.forecastday[selectedDay].date;
        const dateObject = new Date(dateStringFromAPI.replace(/-/g, '/'));
        const days = [
            'Sunday', 'Monday', 'Tuesday', 'Wednesday', 
            'Thursday', 'Friday', 'Saturday'
        ];
        const dayName = days[dateObject.getDay()];
        return dayName;
    }

    const renderDate = selectedDay => {
        const dateStringFromAPI = weatherInfo.forecast.forecastday[selectedDay].date;
        const dateObject = new Date(dateStringFromAPI.replace(/-/g, '/'));
        const dayDate = dateObject.getDate();
        return dayDate;    
    }

    return {renderDay, renderDate};
}

export default useDate;