import clearDay from "./images/weather-type/clear-day.svg";
import clearNight from "./images/weather-type/clear-night.svg";
import cloudy from "./images/weather-type/cloudy.svg";
import fog from "./images/weather-type/fog.svg";
import partlyCloudyDay from "./images/weather-type/partly-cloudy-day.svg";
import partlyCloudyNight from "./images/weather-type/partly-cloudy-night.svg";
import rain from "./images/weather-type/rain.svg";
import showersDay from "./images/weather-type/showers-day.svg";
import showersNight from "./images/weather-type/showers-night.svg";
import snow from "./images/weather-type/snow.svg";
import snowShowersDay from "./images/weather-type/snow-showers-day.svg";
import snowShowersNight from "./images/weather-type/snow-showers-night.svg";
import thunderRain from "./images/weather-type/thunder-rain.svg";
import thunderShowersDay from "./images/weather-type/thunder-showers-day.svg";
import thunderShowersNight from "./images/weather-type/thunder-showers-night.svg";
import wind from "./images/weather-type/wind.svg";

export function setWeatherIcon(iconName, id) {
  switch (iconName) {
    case "clear-day":
      addIcon(id, clearDay);
      break;
    case "clear-night":
      addIcon(id, clearNight);
      break;
    case "cloudy":
      addIcon(id, cloudy);
      break;
    case "fog":
      addIcon(id, fog);
      break;
    case "partly-cloudy-day":
      addIcon(id, partlyCloudyDay);
      break;
    case "partly-cloudy-night":
      addIcon(id, partlyCloudyNight);
      break;
    case "rain":
      addIcon(id, rain);
      break;
    case "showers-day":
      addIcon(id, showersDay);
      break;
    case "showers-night":
      addIcon(id, showersNight);
      break;
    case "snow":
      addIcon(id, snow);
      break;
    case "snow-showers-day":
      addIcon(id, snowShowersDay);
      break;
    case "snow-showers-night":
      addIcon(id, snowShowersNight);
      break;
    case "thunder-rain":
      addIcon(id, thunderRain);
      break;
    case "thunder-showers-day":
      addIcon(id, thunderShowersDay);
      break;
    case "thunder-showers-night":
      addIcon(id, thunderShowersNight);
      break;
    case "wind":
      addIcon(id, wind);
      break;
  }
}

function addIcon(id, icon) {
  document.querySelector(id).src = icon;
}
