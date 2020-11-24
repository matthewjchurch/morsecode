import { fromMorse, toMorse } from "./scripts.js";

document.querySelector(".to-morse").addEventListener("click", () => {
    let input = document.querySelector("textarea").value;
    let output = document.querySelector("p");
    
    output.innerHTML = toMorse(input)
})

document.querySelector(".from-morse").addEventListener("click", () => {
    let input = document.querySelector("textarea").value;
    let output = document.querySelector("p");
    
    output.innerHTML = fromMorse(input)
});