//* Elementos
const $password = document.getElementById("password");
const $generateBtn = document.getElementById("generate");
const $length = document.getElementById("length");
const $showLength = document.getElementById("rangeValue");

//*Variaveis
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();
const numbers = "0123456789";
const symbols = "!@#$%&*(){}[]^~,.;<>?/|=+-";

//*Funções
function getUpper() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}
function getLower() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}
function getNum() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSym() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePass(getUpper, getLower, getNum, getSym) {
    let password = "";
    let passLength = $length.value;
    const generate = [getUpper, getLower, getNum, getSym];
    for (i = 0; i < passLength; i = i + generate.length) {
        generate.forEach(() => {
            let value = generate[Math.floor(Math.random() * generate.length)]();

            password += value;
        });
    }
    password = password.slice(0, passLength);
    $password.innerText = password;
}

//*Eventos
$length.addEventListener("mousemove", () => {
    $showLength.innerText = $length.value;
});
$length.addEventListener("change", () => {
    $showLength.innerText = $length.value;
});
$length.addEventListener("touchmove", () => {
    $showLength.innerText = $length.value;
});
$generateBtn.addEventListener("click", () => {
    generatePass(getUpper, getLower, getNum, getSym);
});
