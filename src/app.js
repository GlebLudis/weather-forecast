import firstRequest from "./firstRequest.js";
import getWeather from "./getWeather.js";
import storage from "./storage.js";
import userWeather from "./userWeather.js";

document.addEventListener("DOMContentLoaded", async () => {
  const firstReq = await firstRequest();
  return firstReq;
});

document.addEventListener("submit", async (ev) => {
  ev.preventDefault();
  const showWeather = await userWeather();
  return showWeather;
});

storage();
