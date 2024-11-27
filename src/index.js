import "./styles.css";
import { displayHeaderInfo, displayCurrentDetails, getHourlyForecast, getDailyForecast } from "./displayController";
import { changeUnitTemp, swapUnitOption, keepFahrenheit } from "./unitChanger";

const loader = document.querySelector("dialog");

// getData("Cebu City"); // default city

async function getData(location) {
  loader.showModal();
  const apiURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?iconSet=icons2&unitGroup=metric&key=WSVCK7JA9HKPVCEEDR8C97F99&contentType=json`;
  await fetch(apiURL, { mode: "cors" })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      displayData(response);
    })
    .catch((error) => {
      loader.close();
      console.log(error);
      alert("Location not found, try adding City/Country/Zipcode");
      document.querySelector("#search-input").value = "";
    });
}

function displayData(forecast) {
  console.log(forecast);
  displayHeaderInfo(forecast);
  displayCurrentDetails(forecast.currentConditions);
  getHourlyForecast(forecast);
  getDailyForecast(forecast);
  loader.close();
  if (document.querySelector("#temp-current").textContent === "°F") {
    keepFahrenheit();
  }
}

(function searchListener() {
  document.querySelector("#search-form").addEventListener("submit", (e) => {
    e.preventDefault();
    getLocation();
  });
})();

function getLocation() {
  const location = document.querySelector("#search-input").value;
  getData(location);
}

(function changeUnitListener() {
  document.querySelector("#temp-option").addEventListener("click", () => {
    changeUnitTemp();
    swapUnitOption();
  });
})();
