import { useContext } from "react";
import { AppContext } from "../components/App/App";

function useTemperature() {
    const {state: {weatherInfo}} = useContext(AppContext);

    const renderMin = selectedDay => {
        const min_temp = Math.round(weatherInfo.forecast.forecastday[selectedDay].day.mintemp_c);
        return min_temp;
    }

    const renderMax = selectedDay => {
        const max_temp = Math.round(weatherInfo.forecast.forecastday[selectedDay].day.maxtemp_c);
        return max_temp;
    }

    const renderMain = selectedDay => {
        const main_temp = Math.round(weatherInfo.forecast.forecastday[selectedDay].day.avgtemp_c);
        return main_temp; 
    }

    return {renderMin, renderMax, renderMain};
}

export default useTemperature;