import { alphabet } from "./data.js";

export const fromMorse = input => {   
    return input.split(" ").map(letter => {
        console.log(letter);
        return getKey(alphabet, letter);                
    }).join("")
}

export const toMorse = input => {
    return input.split("").map(letter => {
        if (letter.match(/[A-Za-z]/)){
            return `${alphabet[letter.toUpperCase()]} `;
        }
        else {
            return `${alphabet[letter]} `;
        }
    }).join("")
}

export const getKey = (obj, val) => {
    let translated = Object.keys(obj).find(key => {
        return obj[key] === val;
    });
    return translated;
}