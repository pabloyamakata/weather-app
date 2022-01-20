import { useContext } from "react";
import { AppContext } from "../components/App/App";

function useTemperature() {
    const {state: {weatherInfo}} = useContext(AppContext);

    const renderMinTemp = selectedDay => {
        const min_temp = Math.round(weatherInfo.forecast.forecastday[selectedDay].day.mintemp_c);
        return min_temp;
    }

    const renderMaxTemp = selectedDay => {
        const max_temp = Math.round(weatherInfo.forecast.forecastday[selectedDay].day.maxtemp_c);
        return max_temp;
    }

    const renderMainTemp = selectedDay => {
        const main_temp = Math.round(weatherInfo.forecast.forecastday[selectedDay].day.avgtemp_c);
        return main_temp; 
    }

    return {renderMinTemp, renderMaxTemp, renderMainTemp};
}

export default useTemperature;