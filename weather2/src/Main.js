import { useState } from "react";
import keys from "./keys";

const api = {
  key: keys.API_KEY,
  enpoint: keys.API_ENDPOINT,
};

// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}


function Main() {
const [query, setQuery] = useState("");
const [weather, setWeather] = useState({});
const search = (e) => {
  if (e.key === "Enter") {
    fetch(`${api.enpoint}forecast?q=${query}&units=imperial&appid=${api.key}`)
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
      <div>
        <input
          type="text"
          placeholder="Location's name"
          className="search-bar"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
      </div>
      {typeof weather.list != "undefined" ? (
        <div>
            <div className="currentDay">
            {weather.list[0].main.temp} F
              </div>
        </div>
      ) : (
        "No input or Location does not exist"
      )}
    </main>
  </div>
);
      }
export default Main;