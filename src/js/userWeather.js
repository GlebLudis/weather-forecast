import { API_KEY, API_KEY_WF } from "./keys.js";

async function userWeather() {
  const input = document.querySelector("input");
  const city = input.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY_WF}&units=metric`;
  const response = await fetch(url);
  return response.json();
}

async function renderWeather() {
  const form = document.querySelector("form");
  const input = document.querySelector("input");

  document.querySelector(".map").innerHTML = "";
  document.querySelector(".weather-form").innerHTML = "";

  const data = await userWeather();
  const { main, name, weather } = data;
  const li = document.createElement("li");
  li.classList.add("city");
  const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  const imageMap = `https://open.mapquestapi.com/staticmap/v5/map?key=${API_KEY}&center=${name}&size400,400px=@2x`;

  document.querySelector(
    ".map"
  ).innerHTML = `<img src=${imageMap} width="200" height="200">`;

  document.querySelector(".weather-form").innerHTML = `
         <h2 class="city-name" data-name="${name}">
         <span>${name}</span>
         </h2>
          <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
          <img class="city-icon" src=${icon} alt=${weather[0].main}>
          <img>${weather[0].description}</img>
        </div>
        `;

  const newData = {
    city: data.name,
    temp: data.main.temp,
    des: data.weather[0].description,
    imgMap: imageMap,
    icn: icon,
  };
  localStorage.setItem(`${name}`, JSON.stringify(newData));

  form.reset();
  input.focus();
}

export { renderWeather, userWeather };
