let display = 0
let store = 0
let store2 = 0
let flag = ""
let clearflag = 0

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
precentage.addEventListener("click", percent)
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

function numEntry(x) {
    if(clearflag == 1) {
        clearDisplay();
        clearflag = 0;
    }
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
    display = "";
    setDisplay();
}

function addition() {
    equal();
    store = display;
    flag = "add";
    clearflag = 1;
}

function subtraction() {
    equal();
    store = display;
    flag = "sub";
    clearflag = 1;
}

function multiplication() {
    equal();
    store = display;
    flag = "times";
    clearflag = 1;
}

function division() {
    equal();
    store = display;
    flag = "div";
    clearflag = 1;
}

function percent() {
    if (display == 0){
        return;
    }
    display = display * 0.01;
    flag = "";
    setDisplay();
    store = 0;
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