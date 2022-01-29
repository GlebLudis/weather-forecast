import firstRequest from "./firstRequest.js";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        main: {
          temp: 16.1,
        },
        name: "Moscow",
        weather: [
          {
            main: "Rain",
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
