import axios from "axios";
import React, { useContext, useState, createContext } from "react";
import { useEffect } from "react";
import useEnvironment from "../Hooks/useEnvironment";

export const CityContext = createContext();

export const useCityContext = () => {
  return useContext(CityContext);
};

const CityContextProvider = ({ children }) => {
  const {
    CITY_URL,
    RAPID_KEY,
    RAPID_HOST,
    API_KEY,
    API_URL,
  } = useEnvironment();

  const [cityName, setCityName] = useState("");
  const [cityData, setCityData] = useState(undefined);
  const [loadingCity, setLoadingCity] = useState();
  const [weatherData, setWeatherData] = useState(undefined);
  const [loadingWeather, setLoadingWeather] = useState();

  useEffect(() => {
    if (cityData) {
      handleWeatherCall(cityData);
    }
  }, [cityData]);

  useEffect(() => {
    handleCurrentCity();
  }, []);

  const handleWeatherCall = async (city) => {
    try {
      setLoadingWeather(true);
      const { data } = await axios.get(
        `${API_URL}/weather?lat=${city.latitude}&lon=${city.longitude}&appid=${API_KEY}&units=metric&lang=sp`
      );
      setWeatherData(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoadingWeather(false);
    }
  };

  const handleCityCall = async (location) => {
    try {
      setLoadingCity(true);
      const { data } = await axios.request({
        method: "GET",
        url: CITY_URL,
        params: {
          namePrefix: cityName,
          languageCode: "es",
          location: location,
        },
        headers: {
          "X-RapidAPI-Key": RAPID_KEY,
          "X-RapidAPI-Host": RAPID_HOST,
        },
      });
      console.log(data);
      setCityData(data.data[0]);
    } catch (e) {
      console.log(e);
    } finally {
      setLoadingCity(false);
    }
  };

  const handleCurrentCity = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        handleCityCall(
          position.coords.latitude.toFixed(4).toString() +
            position.coords.longitude.toFixed(4).toString()
        );
      });
    }
  };

  return (
    <CityContext.Provider
      value={{
        handleCityCall,
        handleWeatherCall,
        loadingCity,
        loadingWeather,
        cityData,
        weatherData,
        setCityName,
        cityName,
      }}
    >
      {children}
    </CityContext.Provider>
  );
};

export default CityContextProvider;
