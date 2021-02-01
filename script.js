let display = 0
let store = 0
let flag = ""

const clear = document.getElementById("clear");
const posneg = document.getElementById("posneg");
const precentage = document.getElementById("percentage");

const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const period = document.getElementById("period");

const equals = document.getElementById("equals");

clear.addEventListener("click", clearDisplay)
posneg.addEventListener("click", setPosNeg)
precentage.addEventListener("click", blankfunct)
add.addEventListener("click", addition)
subtract.addEventListener("click", subtraction)
multiply.addEventListener("click", multiplication)
divide.addEventListener("click", division)
equals.addEventListener("click", equal)

one.addEventListener("click",() => numEntry(1))
two.addEventListener("click",() => numEntry(2))
three.addEventListener("click",() => numEntry(3))
four.addEventListener("click",() => numEntry(4))
five.addEventListener("click",() => numEntry(5))
six.addEventListener("click",() => numEntry(6))
seven.addEventListener("click",() => numEntry(7))
eight.addEventListener("click",() => numEntry(8))
nine.addEventListener("click",() => numEntry(9))
zero.addEventListener("click",() => numEntry(0))
period.addEventListener("click",() => numEntry("."))

function blankfunct() {
    console.log("Hey you clicked the thing!");
    setDisplay();
}

function numEntry(x) {
    let numdisplay = display.toString();
    let numdisplayarr = numdisplay.split("");
    if(numdisplay.length < 8) {
        numdisplayarr.push(`${x}`);
    }
    if(numdisplayarr[0] === "0") {
        numdisplayarr.shift();
    }
    let numjoined = numdisplayarr.join('');
    parseFloat(numjoined);
    display = numjoined;
    setDisplay();
}

function setDisplay() {
    document.getElementById("numberdisplay").innerHTML = display;
}

function setPosNeg() {
    let posNeg = display;
    if (display == 0) {
        return;
    }
    else if (display > 0) {
        let adjusted = Math.abs(posNeg) * -1;
        display = adjusted;
        setDisplay();
    }
    else {
        let adjusted = -Math.abs(posNeg) * -1;
        display = adjusted;
        setDisplay();
    }
}

function clearDisplay() {
    display = 0;
    setDisplay();
}

function addition() {
    if (store == 0){
        store = display;
    }
    display = 0;
    setDisplay();
    flag = "add";
}

function subtraction() {
    if (store == 0){
        store = display;
    }
    display = 0;
    setDisplay();
    flag = "sub";
}

function multiplication() {
    if (store == 0){
        store = display;
    }
    display = 0;
    setDisplay();
    flag = "times";
}

function division() {
    if (store == 0){
        store = display;
    }
    display = 0;
    setDisplay();
    flag = "div";
}

function equal() {
    if (flag == "") {
        return;
    }
    else if (flag == "add") {
        let sum = parseFloat(store) + parseFloat(display);
        display = sum;
        setDisplay();
        flag = ""
        store = 0;
    }
    else if (flag == "sub") {
        let sum = parseFloat(store) - parseFloat(display);
        display = sum;
        setDisplay();
        flag = ""
        store = 0;
    }
    else if (flag == "times") {
        let sum = parseFloat(store) * parseFloat(display);
        display = sum;
        setDisplay();
        flag = ""
        store = 0;
    }
    else if (flag == "div") {
        let sum = parseFloat(store) / parseFloat(display);
        display = sum;
        setDisplay();
        flag = ""
        store = 0;
    }
}

