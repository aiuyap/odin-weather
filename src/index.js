import "./styles.css";
import {
  displayHeaderInfo,
  displayCurrentDetails,
  getHourlyForecast,
  getDailyForecast,
} from "./displayController";

async function getData(location) {
  const apiURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?iconSet=icons2&unitGroup=metric&key=WSVCK7JA9HKPVCEEDR8C97F99&contentType=json`;
  await fetch(apiURL, { mode: "cors" })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      displayData(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

function displayData(forecast) {
  console.log(forecast);
  displayHeaderInfo(forecast);
  displayCurrentDetails(forecast.currentConditions);
  getHourlyForecast(forecast);
  getDailyForecast(forecast);
}

// getData("Cebu City");

(function searchListener() {
  const form = document
    .querySelector("#search-form")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      getLocation();
    });
})();

function getLocation() {
  const location = document.querySelector("#search-input").value;
  console.log(location);
  getData(location);
}
