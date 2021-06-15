import getWeather from "./getWeather.js";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ statusText: "OK" }),
  })
);

describe("Test first request", () => {
  afterEach(() => {
    fetch.mockClear();
  });

  it("getWeather return promise", () => {
    expect(getWeather()).toBeInstanceOf(Promise);
  });

  it("response json", async () => {
    const response = await getWeather();
    expect(response).toEqual({ statusText: "OK" });
  });
});
