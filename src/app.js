import firstRequest from "./firstRequest.js";
import storage from "./storage.js";
import { renderWeather } from "./userWeather.js";

const form = document.querySelector("form");

document.addEventListener("DOMContentLoaded", async () => {
  await firstRequest();
});

form.addEventListener("submit", async (ev) => {
  ev.preventDefault();
  await renderWeather();
});

storage();
