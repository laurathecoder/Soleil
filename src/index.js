let now = new Date();

let h6 = document.querySelector("h6");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

h6.innerHTML = `Today is ${day}, ${hours}:${minutes}`;

function cityName(event) {
  event.preventDefault();
  let apiKey = "97557ee6b2c7b3aeee8dfc80f46f9f4e";
  let city = "Paris";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
}
let form = document.querySelector("form");
form.addEventListener("submit", cityName);
