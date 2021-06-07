import getWeather from "./getWeather.js";
import getCity from "./getCity.js";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ statusText: "OK" }),
  })
);

describe("Test first request", () => {
  afterEach(() => {
    fetch.mockClear();
  });

  it("getWeather return promise", async () => {
    await expect(getWeather()).toBeInstanceOf(Promise);
  });

  it("response json", async () => {
    const response = await getWeather();
    await expect(response).toEqual({ statusText: "OK" });
  });
});
