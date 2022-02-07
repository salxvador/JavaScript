//WHILE Loop example:
function call_loop() {
    var digit = "";
    var counter = 1;
    while (counter < 11) {
        document.getElementById("loop").innerHTML += "<br>" + counter;
        counter ++;
    }
    document.getElementById("end").innerHTML = "done.";
}

//FOR loop example:
var instruments = ["Guitar", "Piano", "Violin", "Cymbals", "Organ", "Trumpet"];
var content = "";
var Y;
function for_loop() {
    for (Y = 0; Y < instruments.length; Y++) {
        content += instruments[Y] + "<br>";
    }
    document.getElementById("list_of_instruments").innerHTML = content;
}

//ARRAY defined in function:
function array_function() {
    var fish_pic = [];
    fish_pic[0] = "swimming";
    fish_pic[1] = "eating";
    fish_pic[2] = "sleeping";
    fish_pic[3] = "jumping";
    document.getElementById("array").innerHTML = "In this picture, the fish is " + fish_pic[0]
    + ".";    
}

// CONST object with added and changed property:
const car = {type:"sedan", color:"white", year:2018};
function const_function() {
    car.type = "coupe";
    car.mileage = "100,000 miles"
    document.getElementById("constant").innerHTML = "The year of the car is "
    + car.year + "." + " It has " + car.mileage + " miles, and is a " + car.type + ".";
}

//LET and VAR:

var x = "variable example.<br>";
document.getElementById("varlet").innerHTML += x;
{
    let x = "let example.<br>"
    document.getElementById("varlet").innerHTML += x;
}
document.getElementById("varlet").innerHTML += x;

//Object with Let:
let fish = {
    size:"small ",
    type:"freshwater ",
    color:"orange ",
    diet:"flakes",
    description : function() {
        return "This is a " + this.size + this.color + this.type + "fish that eats " + this.diet + ".";
    }
};
document.getElementById("fish").innerHTML = fish.description();