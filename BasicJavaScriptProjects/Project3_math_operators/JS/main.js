function fn() { //addition
    let x = 45 + 65;
    document.getElementById("math").innerHTML += x;
}

function sub() { //subtraction
    let y = 45 - 25;
    document.getElementById("sub").innerHTML += y;
}

function mult() { //multiplication
    let y = 5 * 9;
    document.getElementById("mult").innerHTML += y;
}

function div() { //division
    let y = 60 / 3;
    document.getElementById("div").innerHTML += y;
}

function simple_math() { //arithmetic string
    let z = ((6 * 9) / 3) + 2 - 5;
    document.getElementById("simple").innerHTML += z;
}

function modulus() { //modulus (remainder)
    let a = 30 % 7;
    document.getElementById("mod").innerHTML += a;
}

var b = 0;
function inc() { //increment
    b++;
    document.getElementById("inc").innerHTML += b + ", ";
}

var c = 100;
function dec() { //decrement
    c--;
    document.getElementById("dec").innerHTML += c + ", ";
}

function rand() { //Gives a random number btwn 0-1
    let d = Math.random();
    window.alert(d);
}

function pow() { //returns 8 to the power of 2
    let e = Math.pow(8, 2);
    document.getElementById("pow").innerHTML += e;
}