import React from "react";
import { Triangle } from "./triangle.js";

const ts = window.ts;

export const ERROR = {
  NOT_TRIANGLE:
    "Not a valid triangle. The sum of 2 side lengths must be greater than the length of the third side.",
  NONPOSITIVE_SIDES: "Each side must be greater than 0."
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

    let error = checkForErrors(
      this.state.sideOne,
      this.state.sideTwo,
      this.state.sideThree
    );

    if (error === ERROR.NOT_TRIANGLE) {
      ts.ui.Notification.error(ERROR.NOT_TRIANGLE);
      this.setState({ answer: "" }); // Reset answer to "" in the event of correct answer followed by an error
    } else if (error === ERROR.NONPOSITIVE_SIDES) {
      ts.ui.Notification.error(ERROR.NONPOSITIVE_SIDES);
      this.setState({ answer: "" }); // Reset answer to "" in the event of correct answer followed by an error

      // If no errors and is a valid triangle, proceed to find the triangle type
    } else {
      let triangle = new Triangle(
        this.state.sideOne,
        this.state.sideTwo,
        this.state.sideThree
      );

      this.setState({
        answer: triangle.getType
      });
    }
  }

  render() {
    return (
      <div className="Problem">
        <form data-ts="Form">
          <input
            type="number"
            name="sideOne"
            placeholder="First length"
            onChange={this.handleChange}
          ></input>
          <br />

          <input
            type="number"
            name="sideTwo"
            placeholder="Second length"
            onChange={this.handleChange}
          ></input>
          <br />
          <input
            type="number"
            name="sideThree"
            placeholder="Third length"
            onChange={this.handleChange}
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

// Checking requirements for a triangle: Addition of 2 sides must be greater than 1 side
export const checkForErrors = function(sideOne, sideTwo, sideThree) {
  if (sideOne <= 0 || sideTwo <= 0 || sideThree <= 0) {
    return ERROR.NONPOSITIVE_SIDES;
  }

  if (
    sideOne + sideTwo <= sideThree ||
    sideOne + sideThree <= sideTwo ||
    sideTwo + sideThree <= sideOne
  ) {
    return ERROR.NOT_TRIANGLE;
  }
};

export default Problem;
