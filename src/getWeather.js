import getCity from "./getCity.js";
import { API_KEY_WF } from "./keys.js";

const getWeather = async () => {
  const city = await getCity();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY_WF}&units=metric`;
  const response = await fetch(url);
  return response.json();
};

export default getWeather;
