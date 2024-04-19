import React, { useEffect, useState } from "react";
import "./weather.css";
import Search from "../search/Search";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(query) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=3fdc7fcbc732a035cdfee3954c2ad4b5`
      );
      const data = await response.json();

      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  function handleSearch() {
    fetchWeatherData(search);
  }

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  useEffect(() => {
    fetchWeatherData("Mumbai");
  }, []);

  return (
    <div className="weather_container">
      <div className="card">
        <Search
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
        {loading && <div>Loading...</div>}
        {weatherData && (
          <div className="weather_data_cont">
            <h2>
              {weatherData?.name}, {weatherData?.sys?.country}
            </h2>
            <div className="date">{getCurrentDate()}</div>
            <div className="temp">
              <p>
                Temp: <span>{Math.round(weatherData?.main?.temp - 273)}°C</span>
              </p>
              <p>
                Humidity: <span>{weatherData?.main?.humidity}%</span>
              </p>
              <p>
                Feels Like: <span>{Math.round(weatherData?.main?.feels_like - 273)}°C</span>
              </p>
            </div>
            <p className="description">
              {weatherData?.weather[0]?.description}
            </p>
            <div className="wind_info">
              <span>Wind Speed:</span> {weatherData?.wind?.speed}m/s
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
