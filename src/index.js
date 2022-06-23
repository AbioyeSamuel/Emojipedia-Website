import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

//Arrow function Practice.
var numbers = [3, 56, 2, 48, 5];
function Square(x) {
  return x * x;
}
const newNumbers = numbers.map(Square);
console.log(newNumbers);
