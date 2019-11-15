export const TYPE = Object.freeze({
  ISOSCELES: "Isosceles",
  EQUILATERAL: "Equilateral",
  SCALENE: "Scalene"
});

export class Triangle {
  constructor(sideOne, sideTwo, sideThree) {
    this.sideOne = sideOne;
    this.sideTwo = sideTwo;
    this.sideThree = sideThree;

    this.triangleType = this.determineTriangle(
      this.sideOne,
      this.sideTwo,
      this.sideThree
    );
  }

  // Identifying the type of triangle based on the 3 side lengths
  determineTriangle(sideOne, sideTwo, sideThree) {
    if (
      this.sideOne === this.sideTwo &&
      this.sideTwo === this.sideThree &&
      this.sideThree === this.sideOne
    ) {
      return TYPE.EQUILATERAL;
    } else if (
      this.sideOne === this.sideTwo ||
      this.sideTwo === this.sideThree ||
      this.sideOne === this.sideThree
    ) {
      return TYPE.ISOSCELES;
    } else {
      return TYPE.SCALENE;
    }
  }

  get getType() {
    return this.triangleType;
  }
}
