import React, { useState } from "react";
import keys from "./keys";

const api = {
  key: keys.API_KEY,
  enpoint: keys.API_ENDPOINT,
};

function App() {
  const dateBuild = (d) => {
    let date = String(new window.Date());
    return date;
  };

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.enpoint}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((data) => data.json())
        .then((result) => {
          setQuery("");
          setWeather(result);
          console.log(result);
        });
    }
  };

  return (
    <div>
      <main>
        <div className="search-container">
          <input
            type="text"
            placeholder="Location's name"
            className="search-bar"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>

              <div className="location">
                {weather.name}, {weather.country}
              </div>
              <div className="date"> {dateBuild(new Date())}</div>

              <div className="temperature">
                {Math.round(weather.main.temp)}°C
                {Math.round(weather.main.feels_like)}
              </div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>

        ) : (
          "No input or Location does not exist"
        )}
      </main>
    </div>
  );
}

export default App;
