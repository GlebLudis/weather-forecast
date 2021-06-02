import getCity from "./getCity.js";

describe("Test first request", () => {
  let originalFetch;
  let originalConsole;
  beforeEach(() => {
    originalFetch = window.fetch;
    originalConsole = window.console;
  });
  afterEach(() => {
    window.fetch = originalFetch;
    window.console = originalConsole;
  });

  it("getCity is Function", async () => {
    await expect(getCity).toBeInstanceOf(Function);
  });
});
