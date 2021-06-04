import storage from "./storage.js";
import getWeather from "./getWeather.js";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ name: "Moscow" }),
  })
);

describe("Test storage function", () => {
  afterEach(() => {
    fetch.mockClear();
  });

  it("is Function", async () => {
    await expect(storage).toBeInstanceOf(Function);
  });

  it("Await data from getWeather", async () => {
    const data = await getWeather();
    await expect(data).toEqual({ name: "Moscow" });
  });
});

describe("save to local storage", () => {
  beforeEach(() => {
    jest.spyOn(Storage.prototype, "setItem");
  });

  afterEach(() => {
    localStorage.setItem.mockRestore();
  });

  it("If locastorage is null", async () => {
    const result = await storage();
    await expect(localStorage.getItem("Cities")).toBe('["Moscow"]');
  });
});

describe("save to local storage", () => {
  beforeEach(() => {
    jest.spyOn(Storage.prototype, "setItem");
    const name = "Ufa";
    const newData = ["Moscow", "Kazan"];
    const cityStr = JSON.stringify(name);
    const newCity = cityStr.split('"').join("");
    newData.push(newCity);
    localStorage.setItem("Cities", JSON.stringify(newData));
    global.onload = jest.fn();
  });

  afterEach(() => {
    localStorage.setItem.mockRestore();
  });

  it("If locastorage have values", async () => {
    document.body.innerHTML = `
        <datalist id="data-list"></datalist>
 
        `;

    const result = await storage();
    await expect(document.querySelector("datalist").children.length).toEqual(3);
  });
});
