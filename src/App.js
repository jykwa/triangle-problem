import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="head">Triangle Problem</header>
      {/* <header className="App-header">Triangle Problem.....</header> */}
      {/* <header className="App-header">
        <p>Edit and save to reload.</p>
      </header> */}
      <Problem />
    </div>
  );
}

function Problem() {
  return (
    <div className="Problem">
      <form className="inputs">
        <input type="text" placeholder="First length"></input>
        <input type="text" placeholder="Second length"></input>
        <input type="text" placeholder="Third length"></input>
      </form>
      <button data-ts="Button" className="ts-primary">
        <span>What triangle is this?</span>
      </button>
    </div>
  );
}

export default App;
