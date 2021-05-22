import { markup } from "./markup";

describe("test", () => {
  beforeEach(() => {
    markup();
  });
  it("It's function", () => {
    expect(markup).toBeInstanceOf(Function);
  });
  it("Create form", () => {
    expect(document.querySelector("form")).toBeTruthy();
  });
  it("Create input", () => {
    expect(document.querySelector("input")).toBeTruthy();
    expect(document.querySelector("button")).toBeTruthy();
    expect(document.querySelector("span")).toBeTruthy();
    expect(document.querySelector("div")).toBeTruthy();
    expect(document.querySelector(".container")).toBeTruthy();
    expect(document.querySelector("ul")).toBeTruthy();
    expect(document.querySelector(".cities")).toBeTruthy();
  });
});
