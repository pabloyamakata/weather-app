import { useContext } from "react";
import { AppContext } from "../components/App/App";

function useImage() {
    const {state: {weatherInfo}} = useContext(AppContext);
    
    const getIcon = selectedDay => {
        let iconURL = weatherInfo.forecast.forecastday[selectedDay].day.condition.icon;
        let iconURL_isArray = iconURL.split('/');
        let iconCode = iconURL_isArray[6];
        return iconCode;
    }

    return {getIcon};
}

export default useImage;
