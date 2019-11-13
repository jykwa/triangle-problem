// const checkForErrors = require("./problem.js");
import { ERROR } from "./problem.js";
import { checkForErrors } from "./problem.js";

it("returns an error for invalid side lengths", () => {
  let sideOne = 1;
  let sideTwo = 2;
  let sideThree = 4;

  expect(checkForErrors(sideOne, sideTwo, sideThree)).toBe(ERROR.NOT_TRIANGLE);
});
