
function geoOk(location) {
  const latitude = location.coords.latitude;
  const logitude = location.coords.longitude;
  const API_KEY = "ebe0ef372c6f457044451af7b7591c84";
  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${logitude}&appid=${API_KEY}`;
  fetch(weatherApiUrl)
    .then(pull => pull.json())
    .then(data => {
      const city = data.name;
      const weather = data.weather[0].main;

      const weatherBox = document.querySelector(".weather");
      const cityBox = weatherBox.querySelector(".weather_city");
      const weatherWeatherBox = weatherBox.querySelector(".weather_weather");

      cityBox.innerHTML = `${city}`;
      weatherWeatherBox.innerHTML = `${weather}`;
    });
}

function geoErr() {
  alert("Can't find you.")
}

navigator.geolocation.getCurrentPosition(geoOk, geoErr);