import { renderWeather, userWeather } from "./userWeather.js";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        main: {
          temp: 16.1,
          feels_like: 15.38,
          temp_min: 14.75,
          temp_max: 17.24,
          pressure: 1005,
          humidity: 62,
          sea_level: 1005,
          grnd_level: 987,
        },
        name: "Moscow",
        weather: [
          {
            id: 502,
            main: "Rain",
            description: "heavy intensity rain",
            icon: "10d",
          },
        ],
      }),
  })
);

describe("Test storage function", () => {
  beforeEach(() => {
    document.body.innerHTML = `
        <div class="map"></div>
        <div class="weather-form"></div>
    <form>
      <label>
        <input id="text"
          type="text"
          placeholder="Type your city"
          list="data-list"
          autocomplete="off"
          required
          autofocus
        />
      </label>
      <datalist id="data-list"></datalist>
      <button type="submit">Submit</button>
    </form>
        `;
    jest.spyOn(Storage.prototype, "setItem");
    const newData = ["Ufa", "Kazan"];
    localStorage.setItem("Cities", JSON.stringify(newData));
    global.onload = jest.fn();
  });
  afterEach(() => {
    fetch.mockClear();
  });

  it("is Function", async () => {
    await expect(userWeather).toBeInstanceOf(Function);
  });
  it("Check elements", async () => {
    const map = document.querySelector(".map");
    const weatherForm = document.querySelector(".weather-form");
    const input = document.querySelector("input");

    await renderWeather();
    expect(map.innerHTML).toBe(
      '<img src="https://open.mapquestapi.com/staticmap/v5/' +
        'map?key=u4KWD7KSlGqr0XwmW4w0656NGZyJjJcs&amp;center=Moscow&amp;size400,400px=@2x" ' +
        'width="200" height="200">'
    );
  });

  it("locastorage have values 3 after submit", async () => {
    await renderWeather();
    await expect(document.querySelector("datalist").children.length).toEqual(3);
  });

  it("locastorage have values 10 after submit", async () => {
    const newData = [
      "Ufa",
      "Kazan’",
      "Omsk",
      "Paris",
      "Madrid",
      "Rome",
      "Doha",
      "Kaliningrad",
      "Warsaw",
      "Berlin",
    ];
    localStorage.setItem("Cities", JSON.stringify(newData));

    await renderWeather();
    await expect(document.querySelector("datalist").children.length).toEqual(
      10
    );
  });
});
