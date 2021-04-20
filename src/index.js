// formating the date and time
function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];
  return `${day} ${hours}:${minutes}`;
}
let dateElement = document.querySelector("h2");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

// getting the city name to change
function changeCity(event) {
  event.preventDefault();
  let input = document.querySelector("#city-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = input.value;
  search(input.value);
}
// search for city

function search(city) {
  let apiKey = "14851b7f540a88c1c818c45b5f539543";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}
let form = document.querySelector(".search");
form.addEventListener("submit", changeCity);

// show weather conditions in searched city
function showTemperature(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#degree");
  temperatureElement.innerHTML = `${temperature}`;
  let humidity = Math.round(response.data.main.humidity);
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${humidity}`;
  let wind = Math.round(response.data.wind.speed);
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = `${wind}`;
  let description = response.data.weather[0].main;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = `${description}`;
  
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.name;
}
// display current location
function handlePosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "14851b7f540a88c1c818c45b5f539543";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showLocationTemperature);
}
// show weather conditions in current location
function showLocationTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#degree");
  temperatureElement.innerHTML = `${temperature}`;
  let humidity = Math.round(response.data.main.humidity);
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${humidity}`;
  let wind = Math.round(response.data.wind.speed);
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = `${wind}`;
  let description = response.data.weather[0].main;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = `${description}`;
  
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.name;
}
function getCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(handlePosition);
}

let locationButton = document.querySelector("#location");
locationButton.addEventListener("click", getCurrentPosition);

// convert to fahrenheit and convert back to celsius

function changeToFahrenheit(event) {
  event.preventDefault();
  let degrees = document.querySelector("#degree");
  degrees.innerHTML = Math.round((degrees.innerHTML * 9) / 5 + 32);
}

let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", changeToFahrenheit);

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#degree");
  temperatureElement.innerHTML = Math.round(
    ((temperatureElement.innerHTML - 32) * 5) / 9
  );
}

let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", convertToCelsius);
// use dafault city Cheddar
search("Cheddar");
// change image upn refresh

var description = [
"src/images/cheddarScotland.jpg",
"src/images/cheddarSleeping.jpg",
"src/images/cheddarPhone.jpg",
"src/images/cheddarForest.jpg",
"src/images/cheddarDuck.jpg",
"src/images/cheddarFlowers.jpg",
"src/images/cheddarHouse.jpg",
"src/images/cheddarHusband.jpg",
"src/images/cheddarDog.jpg",
"src/images/cheddarPostcards.jpg",
"src/images/cheddarPub.jpg",
"src/images/cheddarSandwich.jpg",
"src/images/cheddarSubway.jpg",
"src/images/cheddarRome.jpg",
"src/images/cheddarPrague.jpg",
"src/images/cheddarMountains.jpg"
];
var size = description.length;
var x = Math.floor(size*Math.random())
document.getElementById('image').src=description[x];
