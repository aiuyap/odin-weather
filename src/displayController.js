import { setWeatherIcon } from "./iconHandler";

export function displayHeaderInfo(forecast) {
  document.querySelector(".current-city").textContent =
    forecast.resolvedAddress;
  document.querySelector(".current-description").textContent =
    forecast.description;
  document.querySelector(".current-temp").textContent =
    forecast.currentConditions.temp + "°";
  setWeatherIcon(forecast.currentConditions.icon, "#current-temp-icon");
}

export function displayCurrentDetails(currentConditions) {
  document.querySelector("#details-wind-speed").textContent =
    currentConditions.windspeed + " km/h";
  document.querySelector("#details-humidity").textContent =
    currentConditions.humidity + "%";
  document.querySelector("#details-sunrise").textContent = formatTime(
    currentConditions.sunrise
  );
  document.querySelector("#details-sunset").textContent = formatTime(
    currentConditions.sunset
  );
}

function formatTime(time) {
  const timeArr = time.split("");
  const timeHour = parseInt(`${timeArr[0]}${timeArr[1]}`);
  let formattedTime;

  if (timeHour > 12) {
    formattedTime = `${timeHour - 12}:${timeArr[3]}${timeArr[4]} PM`;
  } else {
    formattedTime = `${timeHour}:${timeArr[3]}${timeArr[4]} AM`;
  }

  return formattedTime;
}
