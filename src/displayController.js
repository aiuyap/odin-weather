import { setWeatherIcon } from "./iconHandler";
import { getDay } from "date-fns";

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

export function getHourlyForecast(forecast) {
  const currentHrArr = forecast.currentConditions.datetime.split("");
  let currentHr = parseInt(`${currentHrArr[0]}${currentHrArr[1]}`);
  let day = 0;

  for (let i = 0; i < 5; i++) {
    currentHr++;
    if (currentHr === 24) {
      currentHr = 0;
      day = 1;
    }

    document.querySelector(`#hour-${i}`).textContent = formatTime(
      forecast.days[day].hours[currentHr].datetime
    );
    document.querySelector(`#hour-temp-${i}`).textContent =
      forecast.days[day].hours[currentHr].temp + "°";
    setWeatherIcon(forecast.days[day].hours[currentHr].icon, `#hour-icon-${i}`);
  }
}

export function getDailyForecast(forecast) {}

function getDayOfTheWeek(date) {
  const splitDate = parseInt(date.split("-"));
  splitDate[1]--;

  const day = getDay(splitDate[0], splitDate[1], splitDate[2]);
  let dayOfWeek;

  switch (day) {
    case 0:
      dayOfWeek = "Sunday";
      break;
    case 1:
      dayOfWeek = "Monday";
      break;
    case 2:
      dayOfWeek = "Tuesday";
      break;
    case 3:
      dayOfWeek = "Wednesday";
      break;
    case 4:
      dayOfWeek = "Thursday";
      break;
    case 5:
      dayOfWeek = "Friday";
      break;
    case 6:
      dayOfWeek = "Saturday";
      break;
  }
  return dayOfWeek;
}

function formatTime(time) {
  const timeArr = time.split("");
  const timeHour = parseInt(`${timeArr[0]}${timeArr[1]}`);
  let formattedTime;

  if (timeHour === 0) {
    formattedTime = `12:${timeArr[3]}${timeArr[4]} AM`;
  } else if (timeHour > 12) {
    formattedTime = `${timeHour - 12}:${timeArr[3]}${timeArr[4]} PM`;
  } else {
    formattedTime = `${timeHour}:${timeArr[3]}${timeArr[4]} AM`;
  }

  return formattedTime;
}
