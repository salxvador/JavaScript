window.onload = initAll;
var usedNums = new Array(76);

function initAll() {
    if (document.getElementById) {    
        document.getElementById("reload").onclick = anotherCard;
        newCard();
    } 
    else {
        alert("Sorry, your browser does not support this script.");
    }
}

function newCard() {
    for (var i = 0; i < 24; i++) {
        setSquare(i);
    }
}

function setSquare(thisSquare) {
    var currentSquare = "square" + thisSquare;
    var colPlace = new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4);
    var colBasis = colPlace[thisSquare] * 15;
    var newNum;

    do {
        newNum = colBasis + getNewNum() + 1;
    } 
    while (usedNums[newNum]);

        usedNums[newNum] = true;
        document.getElementById(currentSquare).innerHTML = newNum;
}

function getNewNum() {
    return Math.floor(Math.random() * 15);
}

function anotherCard() {
    for (var i = 1; i < usedNums.length; i++) {
        usedNums[i] = false;
    }
    newCard();
    return false;
}