"use strict";

var _globals = require("@jest/globals");

var _data = require("./data.js");

var scripts = _interopRequireWildcard(require("./scripts.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Valid inputs
(0, _globals.it)("should translate to morse", () => {
  (0, _globals.expect)(scripts.toMorse("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")).toBe(".-.. --- .-. . -- / .. .--. ... ..- -- / -.. --- .-.. --- .-. / ... .. - / .- -- . - --..-- / -.-. --- -. ... . -.-. - . - ..- .-. / .- -.. .. .--. .. ... -.-. .. -. --. / . .-.. .. - --..-- / ... . -.. / -.. --- / . .. ..- ... -- --- -.. / - . -- .--. --- .-. / .. -. -.-. .. -.. .. -.. ..- -. - / ..- - / .-.. .- -... --- .-. . / . - / -.. --- .-.. --- .-. . / -- .- --. -. .- / .- .-.. .. --.- ..- .- .-.-.- / ..- - / . -. .. -- / .- -.. / -- .. -. .. -- / ...- . -. .. .- -- --..-- / --.- ..- .. ... / -. --- ... - .-. ..- -.. / . -..- . .-. -.-. .. - .- - .. --- -. / ..- .-.. .-.. .- -- -.-. --- / .-.. .- -... --- .-. .. ... / -. .. ... .. / ..- - / .- .-.. .. --.- ..- .. .--. / . -..- / . .- / -.-. --- -- -- --- -.. --- / -.-. --- -. ... . --.- ..- .- - .-.-.- / -.. ..- .. ... / .- ..- - . / .. .-. ..- .-. . / -.. --- .-.. --- .-. / .. -. / .-. . .--. .-. . .... . -. -.. . .-. .. - / .. -. / ...- --- .-.. ..- .--. - .- - . / ...- . .-.. .. - / . ... ... . / -.-. .. .-.. .-.. ..- -- / -.. --- .-.. --- .-. . / . ..- / ..-. ..- --. .. .- - / -. ..- .-.. .-.. .- / .--. .- .-. .. .- - ..- .-. .-.-.- / . -..- -.-. . .--. - . ..- .-. / ... .. -. - / --- -.-. -.-. .- . -.-. .- - / -.-. ..- .--. .. -.. .- - .- - / -. --- -. / .--. .-. --- .. -.. . -. - --..-- / ... ..- -. - / .. -. / -.-. ..- .-.. .--. .- / --.- ..- .. / --- ..-. ..-. .. -.-. .. .- / -.. . ... . .-. ..- -. - / -- --- .-.. .-.. .. - / .- -. .. -- / .. -.. / . ... - / .-.. .- -... --- .-. ..- -- .-.-.- ");
});
(0, _globals.it)("should handle punctuation", () => {
  (0, _globals.expect)(scripts.toMorse(". ,?'!/():-;")).toBe(".-.-.- / --..-- ..--.. .----. -.-.-- -..-. -.--. -.--.- ---... -....- -.-.-. ");
}); // Invalid inputs
// Null inputs