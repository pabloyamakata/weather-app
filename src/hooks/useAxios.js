import { useContext } from "react";
import { AppContext } from "../components/App/App";
import axios from "axios";

function useAxios() {
    const {
        state,
        state: {
            base_url,
            apiMethod,
            access_token,
            forecastDays,
        },
        setState
    } = useContext(AppContext);

    const axiosGet = requestQuery => {

        setState({
            ...state,
            isLoading: true
        });
        axios.get(`${base_url}${apiMethod}?key=${access_token}&days=${forecastDays}&q=${requestQuery}`)
            .then(response => {
                setState({
                    ...state,
                    weatherInfo: response.data,
                    requestErrorWasFound: false
                });
            }).catch(() => {
            setState({
                ...state,
                isLoading: false,
                requestErrorWasFound: true
            });
        });
    }

    return {axiosGet};
}

export default useAxios;