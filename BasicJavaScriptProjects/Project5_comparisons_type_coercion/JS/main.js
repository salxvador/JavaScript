
document.write(typeof "Sal"); //string
//document.write(typeof 6.05); //number
//document.write(typeof 4); //also number

document.write("50" + 18);

function NotA() { //will display NaN because 0/0 is not a number.
    document.getElementById("NotA").innerHTML = 0/0;
}

function NTrue() { //NaN = true
    document.getElementById("NTrue").innerHTML = isNaN('Sal');
}

function NFalse() { //NaN = false
    document.getElementById("NFalse").innerHTML = isNaN('030201');
}

function inf() { //2E310 is larger than JS can hold, so it will display infinity.
    document.getElementById("inf").innerHTML = 2E310;
}

function negInf() { //will show negative infinity
    document.getElementById("negInf").innerHTML = -2E310;
}

function bTrue() { //boolean condition is false, so will return false.
    document.getElementById("bTrue").innerHTML = 5 < 10;
}

function bFalse() { //boolean condition is true, so will return true.
    document.getElementById("bFalse").innerHTML = 5 > 10;
}

console.log(5+5); //display 10 in dev tools console
console.log(60<10); //display false in dev tools console

//since these are not tied to <p>, they diplay at top of page.
document.write((7+5)==12); //== operator returns true
document.write((7+5)==13); //== operator returns false


// === requires that data type and value are the same.
function eqqq1() { //=== evaluates to true.
    let x = 5===5;
    document.getElementById("eqqq1").innerHTML += x;
}

function eqqq2() { //=== evaluates to false
    let y = 'five'=== 6;
    document.getElementById("eqqq2").innerHTML += y;
}

function eqqq3() { //=== evaluates to false
    let z = 'six'===6;
    document.getElementById("eqqq3").innerHTML += z;
}

function eqqq4() { //=== evaluates to false
    let t = 66===6;
    document.getElementById("eqqq4").innerHTML += t;
}

// AND && and OR ||

function andTrue() {
    let x = (5<10 && 6<10);
    document.getElementById("andTrue").innerHTML += x;
}

function andFalse() {
    let x = (5<10 && 6>10);
    document.getElementById("andFalse").innerHTML += x;
}

function orTrue() {
    let x = (5>10 || 6<10);
    document.getElementById("orTrue").innerHTML += x;
}

function orFalse() {
    let x = (5>10 || 6>10);
    document.getElementById("orFalse").innerHTML += x;
}

// NOT (!) True and False:

function notTrue() { //returns false
    document.getElementById("notTrue").innerHTML += !(20>10); 
}

function notFalse() { //returns true
    document.getElementById("notFalse").innerHTML += !(20<10);
}