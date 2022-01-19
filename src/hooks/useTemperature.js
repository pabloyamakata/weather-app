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

    return {renderMin, renderMax};
}

export default useTemperature;