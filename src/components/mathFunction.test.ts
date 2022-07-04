import { describe, expect, it } from "vitest";
import { add, mul } from "./mathFunctions";

describe("Math function Test", () => {
  it("Check add function", () => {
    expect(add(1, 3)).toBe(4);
  });
  it("Check mul function", () => {
    expect(mul(3, 2)).toBe(6);
  });
});
