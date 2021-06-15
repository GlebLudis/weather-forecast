import API_KEY from "./keys.js";
import getWeather from "./getWeather.js";

async function firstRequest() {
  const data = await getWeather();
  const { main, name, weather } = data;

  const map = document.createElement("div");
  const weatherForm = document.createElement("div");
  map.innerHTML = `<img 
    src=https://open.mapquestapi.com/staticmap/v5/map?key=${API_KEY}&center=${name}&size=200,200@2x
        width="200" height="200">`;
  const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  weatherForm.innerHTML = `
         <h2 class="city-name" data-name="${name}">
         <span>${name}</span>
         </h2>
          <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
          <img class="city-icon" src=${icon} alt=${weather[0].main}>
          <figcaption>${weather[0].description}</figcaption>
        </div>
        `;
  document.querySelector(".map").appendChild(map);
  document.querySelector(".weather-form").appendChild(weatherForm);
}

export default firstRequest;
