import React, { useEffect } from "react";
import { useCityContext } from "../Providers/CityProvider";
import WeatherCard from "./WeatherCard";

const Dashboard = () => {
  const {
    handleCityCall,
    setCityName,
    cityName,
    cityData,
    loadingCity,
    weatherData,
  } = useCityContext();

  return (
    <div>
      <div>
        <div>
          <input
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          ></input>
        </div>
        <button onClick={() => handleCityCall("")}>Buscar</button>

        <WeatherCard />
      </div>
    </div>
  );
};

export default Dashboard;

/*
          <label>Latitud</label>
            <input
              value={lat}
              onChange={(e) => {
                setLat(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <label>Longitud</label>
            <input
              value={lon}
              onChange={(e) => {
                setLon(e.target.value);
              }}
            ></input>
*/
