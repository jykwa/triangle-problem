import React from "react";
import "./Problem.css";

const ERROR = {
  NOT_TRIANGLE: "Not a triangle",
  NONPOSITIVE_SIDES: "Sides must be greater than 0"
};

const TYPE = {
  ISOSCELES: "Isosceles",
  EQUILATERAL: "Equilateral",
  SCALENE: "Scalene"
};

class Problem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideOne: 0,
      sideTwo: 0,
      sideThree: 0,
      answer: ""
    };
  }

  handleChange = event => {
    let name = event.target.name;
    let value = Number(event.target.value);
    this.setState({ [name]: value });
  };

  handleSubmit(e) {
    e.preventDefault();

    let error = this.checkForErrors();

    if (error === ERROR.NOT_TRIANGLE) {
      this.setState({ answer: error });
    } else if (error === ERROR.NONPOSITIVE_SIDES) {
      this.setState({ answer: error });
    } else {
      this.triangleType();
    }
  }

  // Checking requirements for a triangle: Addition of 2 sides must be greater than 1 side
  checkForErrors = function() {
    if (
      this.state.sideOne <= 0 ||
      this.state.sideTwo <= 0 ||
      this.state.sideThree <= 0
    ) {
      return ERROR.NONPOSITIVE_SIDES;
    }

    if (
      this.state.sideOne + this.state.sideTwo < this.state.sideThree ||
      this.state.sideOne + this.state.sideThree < this.state.sideTwo ||
      this.state.sideTwo + this.state.sideThree < this.state.sideOne
    ) {
      return ERROR.NOT_TRIANGLE;
    }
  };

  triangleType = function() {
    if (
      this.state.sideOne === this.state.sideTwo &&
      this.state.sideTwo === this.state.sideThree &&
      this.state.sideThree === this.state.sideOne
    ) {
      this.setState({ answer: TYPE.EQUILATERAL });
    } else if (
      this.state.sideOne === this.state.sideTwo ||
      this.state.sideTwo === this.state.sideThree ||
      this.state.sideOne === this.state.sideThree
    ) {
      this.setState({ answer: TYPE.ISOSCELES });
    } else {
      this.setState({ answer: TYPE.SCALENE });
    }
  };

  render() {
    return (
      <div className="Problem">
        <form data-ts="Form">
          <input
            type="number"
            name="sideOne"
            placeholder="First length"
            onChange={this.handleChange}
            required
          ></input>
          <br />

          <input
            type="number"
            name="sideTwo"
            placeholder="Second length"
            onChange={this.handleChange}
            required
          ></input>
          <br />
          <input
            type="number"
            name="sideThree"
            placeholder="Third length"
            onChange={this.handleChange}
            required
          ></input>
          <br />
        </form>
        <button
          onClick={e => this.handleSubmit(e)}
          data-ts="Button"
          className="ts-primary"
        >
          <span>What triangle is this? </span>
        </button>
        <br />
        <div className="answer-space">
          <span>Answer: </span>
          <br />
          <div className="answer">{this.state.answer}</div>
        </div>
      </div>
    );
  }
}

export default Problem;
