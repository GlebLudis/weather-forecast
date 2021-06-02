import getCity from "./getCity.js";

const getWeather = async () => {
  const apiKey = "20a60a7e129c650ce2044325518adef8";
  const city = await getCity();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const response = await fetch(url);
  return response.json();
};

export default getWeather;
