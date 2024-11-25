export function displayCurrentCity(content) {
  document.querySelector(".current-city").textContent = content;
}

export function displayCurrentTemp(content) {
  document.querySelector(".current-temp").textContent = content + "°";
}

export function displayCurrentDesc(content) {
  document.querySelector(".current-description").textContent = content;
}

export function displayCurrentDetails(forecast) {
  document.querySelector("#details-wind-speed").textContent =
    forecast.currentConditions.windspeed + " km/h";
  document.querySelector("#details-humidity").textContent =
    forecast.currentConditions.humidity + "%";
  document.querySelector("#details-sunrise").textContent = formatTime(
    forecast.currentConditions.sunrise
  );
  document.querySelector("#details-sunset").textContent = formatTime(
    forecast.currentConditions.sunset
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
