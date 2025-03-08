"use client";

import { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  const fetchWeather = async () => {
    if (!city) return;

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();

      if (data.cod === "404") {
        setError(city);
        setWeather(null);
        setIsActive(false);
      } else {
        setWeather(data);
        setError(null);
        setIsActive(true);

        // Reset active state after 5s
        setTimeout(() => setIsActive(false), 5000);
      }
    } catch {
      setError("Error fetching weather data.");
      setWeather(null);
      setIsActive(false);
    }
  };

  const getWeatherIcon = (condition) => {
    switch (condition) {
      case "Clear":
        return "/images/clear.png";
      case "Rain":
        return "/images/rain.png";
      case "Snow":
        return "/images/snow.png";
      case "Clouds":
        return "/images/cloud.png";
      case "Mist":
      case "Haze":
        return "/images/mist.png";
      default:
        return "/images/cloud.png";
    }
  };

  return (
    <div
      className={`container ${isActive ? "active" : ""}`}
      style={{ height: error ? "400px" : "555px" }}
    >
      {/* Search Box */}
      <div className="search-box">
        <i className="bx bxs-map"></i>
        <input
          type="text"
          placeholder="Enter your location"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="bx bx-search" onClick={fetchWeather}></button>
      </div>
      <p className="city-hide">{error || city || "City Hide"}</p>

      {/* Error Message */}
      {error && (
        <div className="not-found active">
          <div className="box">
            <img src="/images/404.png" alt="Not Found" />
            <p>Oops! {error} not found!</p>
          </div>
        </div>
      )}

      {/* Weather Information */}
      {weather && (
        <>
          <div className={`weather-box ${isActive ? "active" : ""}`}>
            <div className="box">
              <div className="info-weather">
                <div className="weather">
                  <img
                    src={getWeatherIcon(weather.weather[0].main)}
                    alt={weather.weather[0].description}
                  />
                  <p className="temperature">
                    {Math.round(weather.main.temp)}
                    <span>°C</span>
                  </p>
                  <p className="decription">{weather.weather[0].description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Weather Details */}
          <div className={`weather-details ${isActive ? "active" : ""}`}>
            <div className="humidity">
              <i className="bx bx-water"></i>
              <div className="text">
                <div className="info-humidity">
                  <span>{weather.main.humidity}%</span>
                </div>
                <p>Humidity</p>
              </div>
            </div>
            <div className="wind">
              <i className="bx bx-wind"></i>
              <div className="text">
                <div className="info-wind">
                  <span>{Math.round(weather.wind.speed)}Km/h</span>
                </div>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
