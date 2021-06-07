import firstRequest from "./firstRequest.js";
import getWeather from "./getWeather.js";
import storage from "./storage.js";
import { renderWeather, userWeather } from "./userWeather.js";

document.addEventListener("DOMContentLoaded", async () => {
  const firstReq = await firstRequest();
});

document.addEventListener("submit", async (ev) => {
  ev.preventDefault();
  const getUserWeather = await userWeather();
  const showWeather = await renderWeather();
  return showWeather;
});

storage();
