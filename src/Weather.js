import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState("");
  const [load, setLoad] = useState(false);
  const [weather, setWeather] = useState({});
  function showWeather(response) {
    setLoad(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: ` http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function handleSearch(event) {
    event.preventDefault();
    let apiKey = "37f507b0f9180073cac0e3095b325fe0";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(showWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSearch}>
      <input
        type="search"
        placeholder="Search for a city"
        onChange={updateCity}
      />
      <button type="submit">Search</button>
    </form>
  );
  if (load) {
    return (
      <div>
        {form}
        <ul>
          <li>Temp: {Math.round(weather.temperature)}°C</li>
          <li>{weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>{weather.wind}KPH</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
