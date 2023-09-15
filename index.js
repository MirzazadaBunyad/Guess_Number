const h1 = document.getElementById("h1");
const num = document.getElementById("number");

const count = rand(1, 100);
let endeavor = 0;

function check() {
    endeavor++;
    if (+num.value > count)
        h1.innerHTML = `Try ${endeavor}: It is many,write a smaller number`;
    else if (+num.value < count)
        h1.innerHTML = `Try ${endeavor}: It is less,write a large number`;
    else
        h1.innerHTML = `Congratulations! You found it in ${endeavor} tries!`;

    num.value = "";
}
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}