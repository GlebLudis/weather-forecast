import firstRequest from "./firstRequest.js";
import storage from "./storage.js";
import { renderWeather } from "./userWeather.js";

document.addEventListener("DOMContentLoaded", async () => {
  await firstRequest();
});

document.addEventListener("submit", async (ev) => {
  ev.preventDefault();
  await renderWeather();
});

storage();
