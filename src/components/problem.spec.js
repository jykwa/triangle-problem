import { ERROR, checkForErrors } from "./problem.js";
import { TYPE, determineTriangle } from "./triangle.js";
import { Triangle } from "./triangle.js";

describe("checkForErrors function: triangle inequality", () => {
  test("returns an error for sides that violate the triangle inequality", () => {
    let sideOne = 1;
    let sideTwo = 2;
    let sideThree = 4;

    expect(checkForErrors(sideOne, sideTwo, sideThree)).toBe(
      ERROR.NOT_TRIANGLE
    );
  });

  test("returns an error for sides that violate the triangle inequality", () => {
    let sideOne = 2;
    let sideTwo = 2;
    let sideThree = 4;
    expect(checkForErrors(sideOne, sideTwo, sideThree)).toBe(
      ERROR.NOT_TRIANGLE
    );
  });

  test("returns an error for sides that violate the triangle inequality", () => {
    let sideOne = 5;
    let sideTwo = 7;
    let sideThree = 12;
    expect(checkForErrors(sideOne, sideTwo, sideThree)).toBe(
      ERROR.NOT_TRIANGLE
    );
  });
});

describe("checkForErrors function: nonpositive sides", () => {
  test("returns an error for a negative side length", () => {
    let sideOne = -1;
    let sideTwo = 2;
    let sideThree = 4;
    expect(checkForErrors(sideOne, sideTwo, sideThree)).toBe(
      ERROR.NONPOSITIVE_SIDES
    );
  });

  test("returns an error for side of length 0", () => {
    let sideOne = 0;
    let sideTwo = 4;
    let sideThree = 2;
    expect(checkForErrors(sideOne, sideTwo, sideThree)).toBe(
      ERROR.NONPOSITIVE_SIDES
    );
  });
});

describe("determineTriangle function: return the name of the valid triangle", () => {
  test("return equilateral", () => {
    let sideOne = 10;
    let sideTwo = 10;
    let sideThree = 10;

    let triangle = new Triangle(sideOne, sideTwo, sideThree);

    expect(triangle.determineTriangle(sideOne, sideTwo, sideThree)).toBe(
      TYPE.EQUILATERAL
    );
  });

  test("return isosceles", () => {
    let sideOne = 4;
    let sideTwo = 4;
    let sideThree = 6;

    let triangle = new Triangle(sideOne, sideTwo, sideThree);

    expect(triangle.determineTriangle(sideOne, sideTwo, sideThree)).toBe(
      TYPE.ISOSCELES
    );
  });

  test("return scalene", () => {
    let sideOne = 5;
    let sideTwo = 7;
    let sideThree = 8;

    let triangle = new Triangle(sideOne, sideTwo, sideThree);

    expect(triangle.determineTriangle(sideOne, sideTwo, sideThree)).toBe(
      TYPE.SCALENE
    );
  });
});
