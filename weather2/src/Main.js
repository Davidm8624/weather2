import { useState } from "react";
import keys from "./keys";


const api = {
  key: keys.API_KEY,
  enpoint: keys.API_ENDPOINT,
};


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
            className="searchBar"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.list != "undefined" ? (
          <div>
            <div className="currentDay">
              <div className="cityName">{weather.city.name} { weather.city.country}</div>
              <div>{weather.list[0].main.temp} F</div>
              <div>Feels like: {weather.list[0].main.feels_like} F</div>
              <div>Humidity: {weather.list[0].main.humidity}</div>
              <div>Wind speed: {weather.list[0].wind.speed} mph</div>
              <div>Amount of sky covered in {weather.list[0].weather[0].description}: {weather.list[0].clouds.all}%</div>
              {/* <div>Type of clouds: {weather.list[0].weather[0].description}</div> */}
            </div>
            <div className="others">
            <div className="card tommorow">
              <div>{weather.list[1].main.temp} F</div>
              <div>Feels like: {weather.list[1].main.feels_like} F</div>
              <div>Humidity: {weather.list[1].main.humidity}</div>
              <div>Wind speed: {weather.list[1].wind.speed} mph</div>
              <div>Amount of sky covered in {weather.list[1].weather[0].description}: {weather.list[1].clouds.all}%</div>
            </div>
            <div className="card theDayAfterThat">
              <div>{weather.list[2].main.temp} F</div>
              <div>Feels like: {weather.list[2].main.feels_like} F</div>
              <div>Humidity: {weather.list[2].main.humidity}</div>
              <div>Wind speed: {weather.list[2].wind.speed} mph</div>
              <div>Amount of sky covered in {weather.list[2].weather[0].description}: {weather.list[2].clouds.all}%</div>
            </div>
            <div className="card fiveDaysFromNegative2DaysInThePast">
              <div>{weather.list[3].main.temp} F</div>
              <div>Feels like: {weather.list[3].main.feels_like} F</div>
              <div>Humidity: {weather.list[3].main.humidity}</div>
              <div>Wind speed: {weather.list[3].wind.speed} mph</div>
              <div>Amount of sky covered in {weather.list[3].weather[0].description}: {weather.list[3].clouds.all}%</div>
            </div>
            <div className="card fourIntoTheFuture">
              <div>{weather.list[4].main.temp} F</div>
              <div>Feels like: {weather.list[4].main.feels_like} F</div>
              <div>Humidity: {weather.list[4].main.humidity}</div>
              <div>Wind speed: {weather.list[4].wind.speed} mph</div>
              <div>Amount of sky covered in {weather.list[4].weather[0].description}: {weather.list[4].clouds.all}%</div>
            </div>
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
