import React from "react";
import { useCityContext } from "../Providers/CityProvider";
import "./WeatherCard.css";

const WeatherCard = () => {
  const { cityData, weatherData } = useCityContext();
  return (
    <div>
      {cityData !== undefined && weatherData !== undefined ? (
        <>
          <h5 className="Weather-Title">
            {cityData.city}, {cityData.country}
          </h5>
          <div className="Weather-Clima">
            {weatherData.weather[0].description}
          </div>
          <div className="Weather-Container">
            <h5 className="Weather-Temperature">
              {Math.round(weatherData.main.temp)}°C
            </h5>
            <div className="Weather-Inner-Container">
              <div className="Weather-Max">
                {Math.round(weatherData.main.temp_max)}°C
              </div>
              <svg height={3} width={70} className="Weather-Svg-Line">
                <path d="M0 0 L70 0 L70 3 L0 3 Z" />
              </svg>
              <div className="Weather-Min">
                {Math.round(weatherData.main.temp_min)}°C
              </div>
            </div>
          </div>

          <div>
            Sensación térmica: {Math.round(weatherData.main.feels_like)}°C
          </div>
          <div>Humedad: {weatherData.main.humidity}%</div>
          <div>Presión: {weatherData.main.pressure} mbar</div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherCard;
