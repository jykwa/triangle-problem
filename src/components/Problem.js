import React, { Component } from "react";
import "./Problem.css";

const ERROR = {
  notTriangle: "Not a triangle",
  nonPositiveSides: "Sides must be greater than 0"
};

const TYPE = {
  isosceles: "",
  equalateral: "",
  scalene: ""
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

  handleSubmit(e) {
    e.preventDefault();

    let error = this.isTriangle();

    if (error === ERROR.notTriangle) {
      this.setState({ answer: error });
    } else if (error === ERROR.nonPositiveSides) {
      this.setState({ answer: error });
    }
  }

  handleChange = event => {
    let name = event.target.name;
    let value = Number(event.target.value);
    this.setState({ [name]: value });
  };

  // Checking requirements for a triangle: Addition of 2 sides must be greater than 1 side
  isTriangle = function() {
    if (
      this.state.sideOne <= 0 ||
      this.state.sideTwo <= 0 ||
      this.state.sideThree <= 0
    ) {
      console.log("TESTING");
      return ERROR.nonPositiveSides;
    }

    console.log(this.state.sideOne + this.state.sideTwo < this.state.sideThree);
    if (
      this.state.sideOne + this.state.sideTwo < this.state.sideThree ||
      this.state.sideOne + this.state.sideThree < this.state.sideTwo ||
      this.state.sideTwo + this.state.sideThree < this.state.sideOne
    ) {
      console.log(this.state.sideOne);
      console.log(this.state.sideTwo);
      console.log(this.state.sideThree);
      return ERROR.notTriangle;
    }

    return true;
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
