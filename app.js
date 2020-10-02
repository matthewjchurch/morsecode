const alphabet = {
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
}

document.querySelector(".to-morse").addEventListener("click", () => {
    let input = document.querySelector("textarea").value;
    let output = document.querySelector("p");
    
    output.innerHTML = input.split("").map(letter => {
        if (letter.match(/[.,?!'\/():;]|\s/)) {
            switch(letter) {
                case " ":
                    return `${alphabet.space} `;
                    break;
                case ".":
                    return `${alphabet.period} `;
                    break;
                case ",":
                    return `${alphabet.comma} `;
                    break;
                case "?":
                    return `${alphabet.question} `;
                    break;
                case "!":
                    return `${alphabet.exclamation} `;
                    break;
                case "/":
                    return `${alphabet.slash} `;
                    break;
                case "(":
                    return `${alphabet.openBracket} `;
                    break;
                case ")":
                    return `${alphabet.closeBracket} `;
                    break;
                case ":":
                    return `${alphabet.colon} `;
                    break;
                case ";":
                    return `${alphabet.semiColon} `;
                    break;
            }
        }

        if (letter.match(/\d/)){
            return alphabet[letter];
        }

        return `${alphabet[letter.toUpperCase()]} `;
    }).join("");
})

document.querySelector(".from-morse").addEventListener("click", () => {
    let input = document.querySelector("textarea").value;
    let output = document.querySelector("p");
    
    output.innerHTML = input.split(" ").map(letter => {
        console.log(letter);
        return getKey(alphabet, letter);                
    }).join("")
});

const getKey = (obj, val) => {
    let translated = Object.keys(obj).find(key => {
        return obj[key] === val;
    });
    switch(translated) {
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
            translated = translated
    }
    return translated;
}

const AudioContext = window.AudioContext || window.webkitAudioContext;

const audioCtx = new AudioContext();

var oscillator = audioCtx.createOscillator();

oscillator.type = 'square';
oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // value in hertz
oscillator.connect(audioCtx.destination);
const playCode = (string) => {
    text = string.innerText;
    console.log(typeof text);
    text.split("").forEach(letter => {
        if (letter === "_"){
            oscillator.start();
            setTimeout(() => oscillator.stop(), 500)
        }
        if (letter === ".") {
            oscillator.start();
            setTimeout(() => oscillator.stop(), 200)
        }
        if (letter = " "){
            setTimeout(() => console.log("hello"), 500)
        }
    })
}

document.querySelector(".play-code").addEventListener("click", playCode(document.querySelector("p")));