import "./styles.css";
import {
  displayCurrentCity,
  displayCurrentTemp,
  displayCurrentDesc,
  displayCurrentDetails,
} from "./displayController";

async function getData(location) {
  const apiURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=WSVCK7JA9HKPVCEEDR8C97F99&contentType=json`;

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
  displayCurrentCity(forecast.resolvedAddress);
  displayCurrentDesc(forecast.description);
  displayCurrentTemp(forecast.currentConditions.temp);
  displayCurrentDetails(forecast);
}

getData("Cebu,Philippines");
