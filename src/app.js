const getCity = async () => {
  const response = await fetch("https://ipapi.co/json/");
  const data = await response.json();
  const { city } = data;
  return city;
};

const getWeather = async () => {
  const apiKey = "20a60a7e129c650ce2044325518adef8";
  const city = await getCity();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const response = await fetch(url);
  return response.json();
};

document.addEventListener("DOMContentLoaded", async () => {
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

  weatherForm.insertAdjacentHTML("beforeend", markup);
  map.insertAdjacentHTML("beforeend", image);
});
