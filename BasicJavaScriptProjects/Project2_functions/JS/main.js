var x = "String 1"
var y = " String 2" //Variables for myfunction concatentation

function myFunction() {
    var str = x + y
    document.getElementById("fn").innerHTML = str; //updated p element when button is clicked.
}

function pfunc() {
    var sent ="This is ";
    sent += "my Sentence!"; //p text is updated to concatenated strings when clicked. (no button)
    document.getElementById("concat").innerHTML = sent;
}