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
      fetch(`${api.enpoint}weather?q=${query}&units=imperial&APPID=${api.key}`)
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
            <div>
              {weather.name}, {weather.sys.country}
            </div>
            <div> {dateBuild(new Date())}</div>
            <div>
              temp is {Math.floor(weather.main.temp)} Fahrenheit
            </div>
            <div>
              it feels like: {Math.floor(weather.main.feels_like)}
            </div>
            <div>
              max temp: {Math.floor(weather.main.temp_max)}
              </div>
              <div>
              min temp: {Math.floor(weather.main.temp_min)}
              </div>
              <div>
              humidity: {Math.floor(weather.main.humidity)}
              </div>
              <div>
              wind speed {(weather.wind.speed)} mph
              </div>
            <div>
              clouds in the sky: {weather.clouds.all}
              </div>
          </div>
        ) : (
          "No input or Location does not exist"
        )}
      </main>
    </div>
  );
}

export default App;
