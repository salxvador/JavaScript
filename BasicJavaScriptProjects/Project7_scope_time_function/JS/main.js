var x = 15;

function global() { //this uses the global var x defined above.
    document.getElementById("global").innerHTML += " " + x;
}

function local() { //This uses locally defined var y within the fn.
    var y = 16;
    document.getElementById("local").innerHTML += " " + y;
}

function localx() { //this attempts to call var y from the fn above. does not work bc of scope.
    console.log(y); //this shows error msg in chrome console.
    document.getElementById("localx").innerHTML += " " + y + "is a nonlocal, nonglobal variable";
    //+ " declared in a different function. " + x + " is a global variable.";
}

//example of if statement in Fn:
function dateFn() {
    if (new Date().getHours() >= 9) {
        document.getElementById("date").innerHTML += "It is past 9AM";
    } else {
        document.getElementById("date").innerHTML += hour + "It is not 9AM yet";
    }
}

//my if-statement:
function isOdd(num) {
    var num = document.getElementById("num").value;
    if ((num % 2) == 1) {
        document.getElementById("isOdd").innerHTML = "true";
    }
}

//my if-else statement:
function isOdd2(num) {
    var num = document.getElementById("num2").value;
    if ((num % 2) == 1) {
        document.getElementById("isOdd2").innerHTML = "true";
    } else {
        document.getElementById("isOdd2").innerHTML = "false";
    }
}

//Example time of day funtion with if, else if, else:
function timeofday() {
    var time = (new Date().getHours());
    var reply;
    if (time < 12 == time >0 ) {
        reply = "It is morning!";
    }
    else if (time >= 12 == time < 18) {
        reply = "It is afternoon.";
    } else {
        reply = "It is evening.";
    }
    document.getElementById("reply").innerHTML = reply;
}