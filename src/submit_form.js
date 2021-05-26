function submitForm() {
  const input = document.querySelector("input");
  const form = document.querySelector("form");
  const apiKey = "20a60a7e129c650ce2044325518adef8";

  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    document.querySelector(".map").innerHTML = "";
    document.querySelector(".weather-form").innerHTML = "";
    const inputVal = input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const { main, name, weather } = data;
        const li = document.createElement("li");
        li.classList.add("city");
        const newKey = `unGTODaBI2fnVlu7XPcaeSj5ndG28d5k`;
        const map = document.createElement("div");
        const weatherForm = document.createElement("div");
        map.innerHTML = `<img 
    src=https://open.mapquestapi.com/staticmap/v5/map?key=${newKey}&center=${name}&size=200,200@2x
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
      });

    form.reset();
    input.focus();
  });
}

export { submitForm };
