import { expect, it } from "@jest/globals";
import { alphabet } from "./data.js";
import * as scripts from "./scripts.js";

// Valid inputs
it("should translate to morse", () => {
    expect(scripts.toMorse("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))
        .toBe(".-.. --- .-. . -- / .. .--. ... ..- -- / -.. --- .-.. --- .-. / ... .. - / .- -- . - --..-- / -.-. --- -. ... . -.-. - . - ..- .-. / .- -.. .. .--. .. ... -.-. .. -. --. / . .-.. .. - --..-- / ... . -.. / -.. --- / . .. ..- ... -- --- -.. / - . -- .--. --- .-. / .. -. -.-. .. -.. .. -.. ..- -. - / ..- - / .-.. .- -... --- .-. . / . - / -.. --- .-.. --- .-. . / -- .- --. -. .- / .- .-.. .. --.- ..- .- .-.-.- / ..- - / . -. .. -- / .- -.. / -- .. -. .. -- / ...- . -. .. .- -- --..-- / --.- ..- .. ... / -. --- ... - .-. ..- -.. / . -..- . .-. -.-. .. - .- - .. --- -. / ..- .-.. .-.. .- -- -.-. --- / .-.. .- -... --- .-. .. ... / -. .. ... .. / ..- - / .- .-.. .. --.- ..- .. .--. / . -..- / . .- / -.-. --- -- -- --- -.. --- / -.-. --- -. ... . --.- ..- .- - .-.-.- / -.. ..- .. ... / .- ..- - . / .. .-. ..- .-. . / -.. --- .-.. --- .-. / .. -. / .-. . .--. .-. . .... . -. -.. . .-. .. - / .. -. / ...- --- .-.. ..- .--. - .- - . / ...- . .-.. .. - / . ... ... . / -.-. .. .-.. .-.. ..- -- / -.. --- .-.. --- .-. . / . ..- / ..-. ..- --. .. .- - / -. ..- .-.. .-.. .- / .--. .- .-. .. .- - ..- .-. .-.-.- / . -..- -.-. . .--. - . ..- .-. / ... .. -. - / --- -.-. -.-. .- . -.-. .- - / -.-. ..- .--. .. -.. .- - .- - / -. --- -. / .--. .-. --- .. -.. . -. - --..-- / ... ..- -. - / .. -. / -.-. ..- .-.. .--. .- / --.- ..- .. / --- ..-. ..-. .. -.-. .. .- / -.. . ... . .-. ..- -. - / -- --- .-.. .-.. .. - / .- -. .. -- / .. -.. / . ... - / .-.. .- -... --- .-. ..- -- .-.-.- ");
});

it("should handle punctuation", () => {
    expect(scripts.toMorse(". ,?'!/():-;"))
        .toBe(".-.-.- / --..-- ..--.. .----. -.-.-- -..-. -.--. -.--.- ---... -....- -.-.-. ")
});

// Invalid inputs

// Null inputs