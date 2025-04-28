function handleSearchSubmit(event) {
  event.preventDefault();
  let inputSearch = document.querySelector("#search-form-input");
  newCity = document.querySelector("#city");
  newCity.innerHTML = inputSearch.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
