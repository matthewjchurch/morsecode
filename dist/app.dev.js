"use strict";

var _scripts = require("./scripts.js");

document.querySelector(".to-morse").addEventListener("click", () => {
  let input = document.querySelector("textarea").value;
  let output = document.querySelector("p");
  output.innerHTML = (0, _scripts.toMorse)(input);
});
document.querySelector(".from-morse").addEventListener("click", () => {
  let input = document.querySelector("textarea").value;
  let output = document.querySelector("p");
  output.innerHTML = (0, _scripts.fromMorse)(input);
});