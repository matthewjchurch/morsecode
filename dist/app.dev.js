"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var alphabet = {
  A: "._",
  B: "_...",
  C: "_._.",
  D: "_..",
  E: ".",
  F: ".._.",
  G: "__.",
  H: "....",
  I: "..",
  J: ".___",
  K: "_._",
  L: "._..",
  M: "__",
  N: "_.",
  O: "___",
  P: ".__.",
  Q: "__._",
  R: "._.",
  S: "...",
  T: "_",
  U: ".._",
  V: "..._",
  W: ".__",
  X: "_.._",
  Y: "_.__",
  Z: "__..",
  1: ".____",
  2: "..___",
  3: "...__",
  4: "...._",
  5: ".....",
  6: "_....",
  7: "__...",
  8: "___..",
  9: "____.",
  0: "_____",
  space: "/",
  period: "._._._",
  comma: "__..__",
  question: "..__..",
  apostrophe: ".____.",
  exclamation: "_._.__",
  slash: "_.._.",
  openBracket: "_.__.",
  closeBracket: "_.__._",
  colon: "___...",
  semiColon: "_._._."
};
document.querySelector(".to-morse").addEventListener("click", function () {
  var input = document.querySelector("textarea").value;
  var output = document.querySelector("p");
  output.innerHTML = input.split("").map(function (letter) {
    if (letter.match(/[.,?!'\/():;]|\s/)) {
      switch (letter) {
        case " ":
          return "".concat(alphabet.space, " ");
          break;

        case ".":
          return "".concat(alphabet.period, " ");
          break;

        case ",":
          return "".concat(alphabet.comma, " ");
          break;

        case "?":
          return "".concat(alphabet.question, " ");
          break;

        case "!":
          return "".concat(alphabet.exclamation, " ");
          break;

        case "/":
          return "".concat(alphabet.slash, " ");
          break;

        case "(":
          return "".concat(alphabet.openBracket, " ");
          break;

        case ")":
          return "".concat(alphabet.closeBracket, " ");
          break;

        case ":":
          return "".concat(alphabet.colon, " ");
          break;

        case ";":
          return "".concat(alphabet.semiColon, " ");
          break;
      }
    }

    if (letter.match(/\d/)) {
      return alphabet[letter];
    }

    return "".concat(alphabet[letter.toUpperCase()], " ");
  }).join("");
});
document.querySelector(".from-morse").addEventListener("click", function () {
  var input = document.querySelector("textarea").value;
  var output = document.querySelector("p");
  output.innerHTML = input.split(" ").map(function (letter) {
    console.log(letter);
    return getKey(alphabet, letter);
  }).join("");
});

var getKey = function getKey(obj, val) {
  var translated = Object.keys(obj).find(function (key) {
    return obj[key] === val;
  });

  switch (translated) {
    case "space":
      translated = " ";
      break;

    case "period":
      translated = ".";
      break;

    case "comma":
      translated = ",";
      break;

    case "question":
      translated = "?";
      break;

    case "apostrophe":
      translated = "'";
      break;

    case "exclamation":
      translated = "!";
      break;

    case "slash":
      translated = "/";
      break;

    case "openBracket":
      translated = "(";
      break;

    case "closeBracket":
      translated = ")";
      break;

    case "colon":
      translated = ":";
      break;

    case "semiColon":
      translated = ";";
      break;

    default:
      translated = translated;
  }

  return translated;
};

var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();
var oscillator = audioCtx.createOscillator();
oscillator.type = 'square';
oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // value in hertz

oscillator.connect(audioCtx.destination);

var playCode = function playCode(string) {
  text = string.innerText;
  console.log(typeof text === "undefined" ? "undefined" : _typeof(text));
  text.split("").forEach(function (letter) {
    if (letter === "_") {
      oscillator.start();
      setTimeout(function () {
        return oscillator.stop();
      }, 500);
    }

    if (letter === ".") {
      oscillator.start();
      setTimeout(function () {
        return oscillator.stop();
      }, 200);
    }

    if (letter = " ") {
      setTimeout(function () {
        return console.log("hello");
      }, 500);
    }
  });
};

document.querySelector(".play-code").addEventListener("click", playCode(document.querySelector("p")));