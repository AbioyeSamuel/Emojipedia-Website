import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

// (=>) Arrow function Practice.
var numbers = [3, 56, 2, 48, 5];
// Here's a function written in just one line using => function
const newNumbers = numbers.map((x) => x * x);
console.log(newNumbers);
