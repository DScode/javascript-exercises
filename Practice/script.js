function add7 (number) {
    return number + 7;
}

function multiply (number1, number2) {
    return number1 * number2;
}

function capitalize (word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function lastLetter (word) {
    return word.at(-1);
}


console.log("add7 return value: " + add7(1));
console.log("multiply return value: " + multiply(11, 12));
console.log("capitalize return value: " + capitalize('heLLo'));
console.log("lastLetter return value: " + lastLetter('abcd'));




