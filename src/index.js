function refreshWeather(response) {
  let newInput = document.querySelector("#temperature");
  let newTemperature = response.data.temperature.current;
  let newCity = document.querySelector("#city");
  let newDecritpion = document.querySelector("#description");
  console.log(response.data);
  newCity.innerHTML = response.data.city;
  newInput.innerHTML = Math.round(newTemperature);
  newDecritpion.innerHTML = response.data.condition.description;
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
