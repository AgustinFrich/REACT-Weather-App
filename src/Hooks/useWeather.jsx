import axios from "axios";
import React, { useState } from "react";
import useEnvironment from "./useEnvironment";
/*
const useWeather = () => {
  //return { handleWeatherCall, loadingWeather, weatherData };
};

export default useWeather;

/*
const hardcodedData = {
  coord: {
    lon: 0,
    lat: 0,
  },
  weather: [
    {
      id: 803,
      main: "Clouds",
      description: "muy nuboso",
      icon: "04d",
    },
  ],
  base: "stations",
  main: {
    temp: 23.52,
    feels_like: 24.3,
    temp_min: 22.78,
    temp_max: 24.44,
    pressure: 1006,
    humidity: 91,
  },
  visibility: 10000,
  wind: {
    speed: 0.45,
    deg: 148,
    gust: 0.89,
  },
  clouds: {
    all: 79,
  },
  dt: 1659960602,
  sys: {
    type: 2,
    id: 2002303,
    sunrise: 1659938534,
    sunset: 1659982149,
  },
  timezone: 0,
  id: 6295630,
  name: "Globe",
  cod: 200,
  city: "",
  country: "", 
};
*/
