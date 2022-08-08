import React, { useContext, useState, createContext } from "react";
import axios from "axios";
import useEnvironment from "../hooks/useEnvironment";

export const WeatherContext = createContext();

export const useWeather = () => {
    return useContext(WeatherContext)
}

const WeatherContextProvider = ({children}) => {
    const { API_URL } = useEnvironment();


    return (
        <WeatherContext.Provider
        value={{

        }}>
            {children}
        </WeatherContext.Provider>
    )
}