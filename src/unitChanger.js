function changeToFahrenheit(celcius) {
  let fahrenheit = celcius * 1.8 + 32;
  if (!Number.isInteger(fahrenheit)) {
    fahrenheit = Math.round(fahrenheit * 10) / 10;
  }
  return fahrenheit;
}

function changeToCelcius(fahrenheit) {
  let celcius = (fahrenheit - 32) / 1.8;
  if (!Number.isInteger(celcius)) {
    celcius = Math.round(celcius * 10) / 10;
  }
  return celcius;
}

export function changeUnitTemp() {
  if (document.querySelector("#temp-current").textContent === "°C") {
    convert(".current-temp", 1);
    convert("#hour-temp-0", 1);
    convert("#hour-temp-1", 1);
    convert("#hour-temp-2", 1);
    convert("#hour-temp-3", 1);
    convert("#hour-temp-4", 1);
    convert("#daily-temp-1", 1);
    convert("#daily-temp-2", 1);
    convert("#daily-temp-3", 1);
    convert("#daily-temp-4", 1);
    convert("#daily-temp-5", 1);
  } else {
    convert(".current-temp", 0);
    convert("#hour-temp-0", 0);
    convert("#hour-temp-1", 0);
    convert("#hour-temp-2", 0);
    convert("#hour-temp-3", 0);
    convert("#hour-temp-4", 0);
    convert("#daily-temp-1", 0);
    convert("#daily-temp-2", 0);
    convert("#daily-temp-3", 0);
    convert("#daily-temp-4", 0);
    convert("#daily-temp-5", 0);
  }
}

export function swapUnitOption() {
  const currentUnit = document.querySelector("#temp-current");
  const optionUnit = document.querySelector("#temp-option");

  if (currentUnit.textContent === "°C") {
    currentUnit.textContent = "°F";
    optionUnit.textContent = "°C";
  } else {
    currentUnit.textContent = "°C";
    optionUnit.textContent = "°F";
  }
}

export function keepFahrenheit() {
  convert(".current-temp", 1);
  convert("#hour-temp-0", 1);
  convert("#hour-temp-1", 1);
  convert("#hour-temp-2", 1);
  convert("#hour-temp-3", 1);
  convert("#hour-temp-4", 1);
  convert("#daily-temp-1", 1);
  convert("#daily-temp-2", 1);
  convert("#daily-temp-3", 1);
  convert("#daily-temp-4", 1);
  convert("#daily-temp-5", 1);
}

function convert(id, choice) {
  if (choice === 1) {
    const currentTemp = document.querySelector(id).textContent.slice(0, -1);
    document.querySelector(id).textContent = changeToFahrenheit(+currentTemp) + "°";
  } else {
    const currentTemp = document.querySelector(id).textContent.slice(0, -1);
    document.querySelector(id).textContent = changeToCelcius(+currentTemp) + "°";
  }
}
