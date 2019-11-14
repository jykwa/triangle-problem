// const checkForErrors = require("./problem.js");
import { ERROR, TYPE, checkForErrors, determineTriangle } from "./problem.js";

it("returns an error for invalid side lengths", () => {
  let sideOne = 1;
  let sideTwo = 2;
  let sideThree = 4;
  expect(checkForErrors(sideOne, sideTwo, sideThree)).toBe(ERROR.NOT_TRIANGLE);

  sideOne = 2;
  sideTwo = 2;
  sideThree = 4;
  expect(checkForErrors(sideOne, sideTwo, sideThree)).toBe(ERROR.NOT_TRIANGLE);

  sideOne = 5;
  sideTwo = 7;
  sideThree = 12;
  expect(checkForErrors(sideOne, sideTwo, sideThree)).toBe(ERROR.NOT_TRIANGLE);
});

it("returns an error for nonpositive side lengths, including 0", () => {
  let sideOne = -1;
  let sideTwo = 2;
  let sideThree = 4;

  expect(checkForErrors(sideOne, sideTwo, sideThree)).toBe(
    ERROR.NONPOSITIVE_SIDES
  );

  sideOne = 0;
  sideTwo = 4;
  sideThree = 2;
  expect(checkForErrors(sideOne, sideTwo, sideThree)).toBe(
    ERROR.NONPOSITIVE_SIDES
  );
});

it("should return the name of the valid triangle", () => {
  let sideOne = 10;
  let sideTwo = 10;
  let sideThree = 10;

  expect(determineTriangle(sideOne, sideTwo, sideThree)).toBe(TYPE.EQUILATERAL);

  sideOne = 4;
  sideTwo = 4;
  sideThree = 6;
  expect(determineTriangle(sideOne, sideTwo, sideThree)).toBe(TYPE.ISOSCELES);

  sideOne = 5;
  sideTwo = 7;
  sideThree = 8;
  expect(determineTriangle(sideOne, sideTwo, sideThree)).toBe(TYPE.SCALENE);
});
