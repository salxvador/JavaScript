var person = { //sample dictionary
    species : "human",
    height : "6.0 ft",
    age : 30,
    language : "Pig-Latin",
    species : "alien" //2nd species KVP overrides the 1st
};

delete person.language; //deleting one of the dictionary KVPs, then calling it below.

function dict() { //fn is called by <p> element
    document.getElementById("dictionary").innerHTML = person.language;
}