// const romanToInt = require("./romanToInt");
import romanToInt from "./romanToInt";

test("IV", () => {
  expect(romanToInt("IV")).toBe(4);
});
test("LVIII", () => {
  expect(romanToInt("LVIII")).toBe(58);
});
test("XX", () => {
  expect(romanToInt("XX")).toBe(20);
});
test("DLXVI", () => {
  expect(romanToInt("DLXVI")).toBe(566);
});
test("CCCLXXXVII", () => {
  expect(romanToInt("CCCLXXXVII")).toBe(387);
});
test("DCV", () => {
  expect(romanToInt("DCV")).toBe(605);
});
