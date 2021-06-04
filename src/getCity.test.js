import getCity from "./getCity.js";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ city: "Moscow" }),
  })
);

describe("Test first request", () => {
  afterEach(() => {
    fetch.mockClear();
  });

  it("getCity is Function", async () => {
    await expect(getCity).toBeInstanceOf(Function);
  });

  it("the data is city", async () => {
    const data = await getCity();
    await expect(data).toBe("Moscow");
  });
});
