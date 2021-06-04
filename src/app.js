import firstRequest from "./firstRequest.js";
import getWeather from "./getWeather.js";
import storage from "./storage.js";
import weatherFromInput from "./gettingWeather.js";

document.addEventListener("DOMContentLoaded", async () => {
  const firstReq = await firstRequest();
  return firstReq;
});

document.addEventListener("submit", async (ev) => {
  ev.preventDefault();
  const showWeather = await weatherFromInput();
  return showWeather;
});

storage();
