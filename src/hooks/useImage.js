import { useContext } from "react";
import { AppContext } from "../components/App/App";

function useImage() {
    const {state: {weatherInfo}} = useContext(AppContext);

    const getMomentOfTheDay = () => {
        const isDay = weatherInfo.current.is_day;
        let momentOfTheDay = null;
        isDay ? momentOfTheDay = 'day' : momentOfTheDay = 'night';
        return momentOfTheDay;
    }
    
    const getIcon = selectedDay => {
        
        if(selectedDay === 0) {
            const iconURL = weatherInfo.current.condition.icon;
            const iconURL_isArray = iconURL.split('/');
            const iconCode = iconURL_isArray[6];
            return iconCode;
        } else {
            const iconURL = weatherInfo.forecast.forecastday[selectedDay].day.condition.icon;
            const iconURL_isArray = iconURL.split('/');
            const iconCode = iconURL_isArray[6];
            return iconCode;
        }
    }

    return {getMomentOfTheDay, getIcon};
}

export default useImage;
