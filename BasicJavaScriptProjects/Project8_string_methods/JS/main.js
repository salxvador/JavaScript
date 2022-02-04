// Sentence concatenation function:
function sentence() {
    var part1 = "This is ";
    var part2 = "my well-formed ";
    var part3 = "sentence!";
    utterance = part1.concat(part2, part3);
    document.getElementById("sentence").innerHTML = utterance;
}

// slice methdod. The arguments (10, 20) indicate the range of chars to be extracted.
function sliceMethod() {
    var sentence = document.getElementById("slice").innerHTML;
    var section = sentence.slice(10,20);
    document.getElementById("slice").innerHTML = section;
}

//using toUpperCase() method on string:
function upperC() {
    let text = document.getElementById("upperC").innerHTML;
    let result = text.toUpperCase();
    document.getElementById("upperC").innerHTML = result;
}

//searches the text variable for the position of the search() argument:
function position() {
    let text = document.getElementById("position").innerHTML;
    let position = text.search("the");
    document.getElementById("position").innerHTML += position;
}

//converts the number data type in x variable to string then displays in html:
function strMethod() {
    let x = 156;
    let text = x.toString();
    document.getElementById("numToString").innerHTML = text;
}

//toPrecision reformats a number to the specified digits in arg:
function prec_method() {
    let x = 12938.301298737611;
    document.getElementById("precision").innerHTML = x.toPrecision(10);
}

//toFixed displays the number with the specified number of dec places:
function fixed() {
    let x = 56.264897;
    document.getElementById("fixed").innerHTML += x.toFixed(2);
}

//valueOf returns the value of a string object (the string):
function val() {
    let x = new String("the string object");
    document.getElementById("value").innerHTML += x.valueOf();
}