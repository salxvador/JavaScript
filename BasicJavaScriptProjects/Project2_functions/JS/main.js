var x = "String 1"
var y = " String 2"

function myFunction() {
    var str = x + y
    document.getElementById("fn").innerHTML = str;
}

function pfunc() {
    var sent ="This is ";
    sent += "my Sentence!";
    document.getElementById("concat").innerHTML = sent;
}