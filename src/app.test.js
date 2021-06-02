import { getCity } from "./app.js";

describe("Test firstRequest", () => {
  it("firstRequest is Function", async () => {
    await expect(getCity).toBeInstanceOf(Function);
  });
});
