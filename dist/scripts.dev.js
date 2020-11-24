"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getKey = exports.toMorse = exports.fromMorse = void 0;

var _data = require("./data.js");

const fromMorse = input => {
  return input.split(" ").map(letter => {
    console.log(letter);
    return getKey(_data.alphabet, letter);
  }).join("");
};

exports.fromMorse = fromMorse;

const toMorse = input => {
  return input.split("").map(letter => {
    if (letter.match(/[A-Za-z]/)) {
      return "".concat(_data.alphabet[letter.toUpperCase()], " ");
    } else {
      return "".concat(_data.alphabet[letter], " ");
    }
  }).join("");
};

exports.toMorse = toMorse;

const getKey = (obj, val) => {
  let translated = Object.keys(obj).find(key => {
    return obj[key] === val;
  });
  return translated;
};

exports.getKey = getKey;