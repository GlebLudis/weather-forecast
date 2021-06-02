import getCity from "./getCity.js";
import getWeather from "./weather.js";

document.addEventListener("DOMContentLoaded", async () => {
  const responseCity = await getCity();
  const responseWeather = await getWeather();
  const data = await getWeather();
  const { main, name, weather } = data;
  const newKey = `unGTODaBI2fnVlu7XPcaeSj5ndG28d5k`;

  const map = document.querySelector(".map");
  const weatherForm = document.querySelector(".weather-form");
  const image = `<img 
    src=https://open.mapquestapi.com/staticmap/v5/map?key=${newKey}&center=${name}&size=200,200@2x
        width="200" height="200">`;
  const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  const markup = `
         <h2 class="city-name" data-name="${name}">
         <span>${name}</span>
         </h2>
          <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
          <img class="city-icon" src=${icon} alt=${weather[0].main}>
          <figcaption>${weather[0].description}</figcaption>
        </div>
        `;

  const checkData = localStorage.getItem("Cities");
  if (checkData == null) {
    const newData = [];
    const cityStr = JSON.stringify(name);
    const newCity = cityStr.split('"').join("");
    newData.push(newCity);
    localStorage.setItem("Cities", JSON.stringify(newData));
  } else {
    let str = "";
    const oldData = localStorage.getItem("Cities");
    const parseData = JSON.parse(oldData);
    parseData.forEach((cities) => {
      str += `<option value="${cities}" />`;
    });

    const dataList = document.getElementById("data-list");
    dataList.innerHTML = str;
  }

  weatherForm.insertAdjacentHTML("beforeend", markup);
  map.insertAdjacentHTML("beforeend", image);
});
