import firstRequest from "./firstRequest.js";

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
        <input id="text"
          type="text"
          list="data-list"
          autocomplete="off"
          required
          autofocus
        />
       `;
  });
  afterEach(() => {
    fetch.mockClear();
  });

  it("is Function", () => {
    expect(firstRequest).toBeInstanceOf(Function);
  });

  it("Check elements", async () => {
    const map = document.querySelector(".map");
    const input = document.querySelector("input");

    await firstRequest();
    expect(map.innerHTML).toBe(
      "<div>" +
        '<img src="https://open.mapquestapi.com/staticmap/v5/' +
        "map?key=u4KWD7KSlGqr0XwmW4w0656NGZyJjJcs&amp;" +
        'center=Moscow&amp;size=200,200@2x" width="200" height="200"></div>'
    );
  });
});
