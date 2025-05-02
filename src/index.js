function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function refreshWeather(response) {
  let newInput = document.querySelector("#temperature");
  let newTemperature = response.data.temperature.current;
  let newCity = document.querySelector("#city");
  let newDecritpion = document.querySelector("#description");
  let newHumidity = document.querySelector("#Humidity");
  let newWind = document.querySelector("#wind");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);

  newCity.innerHTML = response.data.city;
  newInput.innerHTML = Math.round(newTemperature);
  newDecritpion.innerHTML = response.data.condition.description;
  newHumidity.innerHTML = response.data.temperature.humidity;
  newWind.innerHTML = response.data.wind.speed;
  timeElement.innerHTML = formatDate(date);
}

function searchCity(city) {
  let apiKey = "625t01634a276d07f8dc7437o8d4abf9";
  let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(url).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let inputSearch = document.querySelector("#search-form-input");
  newCity = document.querySelector("#city");
  searchCity(inputSearch.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
