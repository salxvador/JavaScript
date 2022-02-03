function ride_fn() { //checks if the input value is greater than 52, the returns string
    var height, can_ride; //that corresponds with t/f value in can_ride
    height = document.getElementById("height").value;
    can_ride = (height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("ride").innerHTML = can_ride + " to ride.";
}

function vote() { //Does the same thing as above, only with age, to vote.
    var age, can_vote;
    age = document.getElementById("age").value;
    can_vote = (age < 18) ? "You are too young to vote. Come back when you are 18!":"You can vote!";
    document.getElementById("vote").innerHTML = can_vote;
}

//Keywords and Constructors Fn:
function vehicle(make, model, year, color) {
    this.vehicle_make = make;
    this.vehicle_model = model;
    this.vehicle_year = year;
    this.vehicle_color = color;
}
//Initializing vehicle objects:
var Jack = new vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new vehicle("Ford", "Pinto", 1971, "Mustard");

//examples of how to use object properties in Fns:
function myFn() {
    document.getElementById("KeywordsAndConstructors").innerHTML = "Erik drives a " 
    + Erik.vehicle_color + "-colored " + Erik.vehicle_model + 
    " manufactured in " + Erik.vehicle_year;
}

function myFn2() {
    document.getElementById("NewAndThis").innerHTML = 
    "Emily drives a " + Emily.vehicle_make +" "+ Emily.vehicle_model + 
    " with chrome rims and a " + Emily.vehicle_color + " paint job.";
}

//trying us use reserved word as variable name:
//var this = "String in Reserved word.";
//document.write(this);
/*doing this breads all JS code in this file ^ */

//My Constructor Fn for Student Object:
function Student(name, grade, school, GPA) {
    this.Student_name = name;
    this.Student_grade = grade;
    this.Student_school = school;
    this.Student_GPA = GPA;
}

var sal = new Student("Salvador", "13", "The Tech Academy", 3.95);

//My Fn to pull info from student object:
function StuFn() {
    document.getElementById("student").innerHTML = sal.Student_name + 
    " is a student in " + sal.Student_grade + "th grade. They attend " 
    + sal.Student_school + ".";
}

//My Nested Function:
function nest() {
    document.getElementById("nest").innerHTML = addOne();
    function addOne() {
        //Number() converts string to number data type if possible.
        //start from the value that is already in .innerHTML
    var start = Number(document.getElementById("nest").innerHTML);
    start += 1;
    return start;
    }
}