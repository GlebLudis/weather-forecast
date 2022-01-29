import getWeather from "./getWeather.js";
// eslint-disable-next-line import/extensions
import { API_KEY } from "./keys";

async function storage() {
  const data = await getWeather();
  const { name, weather } = data;
  const checkData = localStorage.length;
  const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  const imageMap = `https://open.mapquestapi.com/staticmap/v5/map?key=${API_KEY}&center=${name}&size400,400px=@2x`;
  if (checkData === 0) {
    const newData = {
      city: data.name,
      temp: data.main.temp,
      des: data.weather[0].description,
      imgMap: imageMap,
      icn: icon,
    };
    localStorage.setItem(`${name}`, JSON.stringify(newData));
  } else {
    console.log("ok");
  }
}

export default storage;
