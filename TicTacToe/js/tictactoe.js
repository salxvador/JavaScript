//arrow = () => document.getElementById("arrow").innerHTML = "This is a function.";

//This var keeps track of whose turn it is.
let activePlayer = 'X';
//This array stores the moves. We use this to determine win conditions.
let selectedSquares = [];

//This fn is for placing an x or an o in a square.
function placeXorO(squareNumber) {
    //This condition ensures a square hasn't been selected already.
    //the .some() method is used to check eahc element of a selected sq array
    //to see if it contains the sq number click on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //this var retrieves the html element id that was clicked
        let select = document.getElementById(squareNumber);
        //This condition checks whose turn it is, then places appropriate bg image.
        if (activePlayer=='X') {
            select.style.backgroundImage = 'url("images/x2.jpg")';
        } else {
            select.style.backgroundImage = 'url("images/o2.jpg")';
        }
        //squareNumber and activePlayer are concatenated together and added to array:
        selectedSquares.push(squareNumber + activePlayer);
        //this calls a fn to check for win conditions.
        checkWinConditions();
        //This condition is for changing the active player
        if (activePlayer == 'X') {
            //change activePlayer from X to O
            activePlayer = 'O';
        } else {
            //if active player is not X, change it to X
            activePlayer = 'X';
        }

        //This function plays placement sound.
        audio('./media/place2.wav');
        //This condition checks to see if it is computer's turn
        if (activePlayer === 'O') {
            //This fn disables clicking for computer choice (1s)
            disableClick();
            setTimeout(function (){computersTurn(); }, 1000)
        }
        //Returning true is needed for computersTurn() to work.
        return true;
    }
    //This fn results in a random square being selected
    function computersTurn() {
        //this boolean is needed for our while loop
        let success = false;
        //this var stores a random number 0-8
        let pickASquare;
        //This cond allows our while loop to keep trying if a square hasn't been selected.
        while(!success) {
            //a random number btween 0-8 is selected
            pickASquare = String(Math.floor(Math.random() * 9));
            //if the random number evals to true, it hasn't been selected yet.
            if (placeXorO(pickASquare)) {
                //This line calls the fn
                placeXorO(pickASquare);
                //this changes our boolean and ends the loop
                success = true;
            };
        }
    }
}

//This function parses the selectedSquares array to check for win conditions.
//drawWinLine function is called to draw line if condition is met.

function checkWinConditions() {
    //X 0,1,2 condition, etc
    if      (arrayincludes('0X','1X','2X')) { drawWinLine(50,100,558,100) }
    else if (arrayincludes('3X','4X','5X')) { drawWinLine(50,304,558,304) }
    else if (arrayincludes('6X','7X','8X')) { drawWinLine(50,508,558,508) }
    else if (arrayincludes('0X','3X','6X')) { drawWinLine(50,100,558,100) }
    else if (arrayincludes('1X','4X','7X')) { drawWinLine(304,50,304,558) }
    else if (arrayincludes('2X','5X','8X')) { drawWinLine(508,50,508,558) }
    else if (arrayincludes('6X','4X','2X')) { drawWinLine(100,508,510,90) }
    else if (arrayincludes('0X','4X','8X')) { drawWinLine(100,100,520,520) }
    else if (arrayincludes('0O','1O','2O')) { drawWinLine(50,100,558,100) }
    else if (arrayincludes('3O','4O','5O')) { drawWinLine(50,304,558,304) }
    else if (arrayincludes('6O','7O','8O')) { drawWinLine(50,508,558,508) }
    else if (arrayincludes('0O','3O','6O')) { drawWinLine(50,100,558,100) }
    else if (arrayincludes('1O','4O','7O')) { drawWinLine(304,50,304,558) }
    else if (arrayincludes('2O','5O','8O')) { drawWinLine(508,50,508,558) }
    else if (arrayincludes('6O','4O','2O')) { drawWinLine(100,508,510,90) }
    else if (arrayincludes('0O','4O','8O')) { drawWinLine(100,100,520,520) }
    //This cond checks for a tie. if none of the above conditions register and 9
    //squares are selected the code executes.
    else if (selectedSquares.length >= 9) { 
        audio('./media/tie2.wav');
        //sets a 0.3s timer before the reset game is called
        setTimeout(function () {resetGame(); }, 1000);
    }

    //This fn checks if any array includes 3 strings. It is used to check for 
    //each win condition
    function arrayincludes(squareA, squareB, squareC) {
        //These three vars will be used to check for 3 in a row
        const a = selectedSquares.includes(squareA)        
        const b = selectedSquares.includes(squareB)        
        const c = selectedSquares.includes(squareC)  
        //if the 3 variables we pass are all included in our array, true is
        //returned and our else if condition executes the drawline fn.
        if (a === true && b === true && c === true) { return true }          
    }
}

//This function makes our body element temporarily unclickable for 1s.
function disableClick() {
    body.style.pointerEvents = 'none';
    setTimeout(function () {body.style.pointerEvents = 'auto';}, 1000);
}

//This fn takes a string param of the path for audio files.
function audio(audioURL) {
    //create a new audio object and send the path as a param.
    let audio = new Audio(audioURL);
    //play method plays the audio sound.
    audio.play();
}

//This fn uses HTML Canvas to draw Win Lines
function drawWinLine(coordx1, coordy1, coordx2, coordy2) {
    //access our html Canvas element
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    let x1 = coordx1,
        y1 = coordy1,
        x2 = coordx2,
        y2 = coordy2,
        //This var stores temp x-axis as we update in our animation loop
        x = x1,
        //This var stores temp y-axis.
        y = y1;

    //This Fn Interacts with the Canvas
    function animateLineDrawing() {
        //this var creates a loop
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //This method clears content from the last loop iteration.
        c.clearRect(0,0,608,608);
        //This method starts a new path
        c.beginPath();
        c.moveTo(x1,y1)
        c.lineTo(x,y)
        c.lineWidth = 10;
        //set the color of our line
        c.strokeStyle = 'rgba(70,255,33,0.8)';
        c.stroke();
        //This cond checks if we've reached the endpoint.
        if (x1 <= x2 && y1 <= y2) {
            //this condition adds 10 to the prev end x pt
            if (x < x2) {x += 10;}
            if (y < y2) {y += 10;}
            //This condition cancels animation loop once we've reached endpoints
            if (x >=x2 && y >= y2) {cancelAnimationFrame(animationLoop);}
        }
        //This condition is similar to the one above.
        //This is necessary for the 6,4,2 win condition
        if (x1 <= x2 && y1 >=y2) {
            if (x < x2) {x += 10;}
            if (y > y2) {y -= 10;}
            if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop);}
        }
    }

    //This function clears our canvas after our win line is drawn
    function clear() {
        //This line starts our anim loop
        const animationLoop = requestAnimationFrame(clear);
        //This line clears our canvas
        c.clearRect(0,0,608,608);
        //This line stops our animation loop
        cancelAnimationFrame(animationLoop)
    }
    //This line disallows clicking while the win sound is playing.
    disableClick();
    audio('./media/win2.wav');
    animateLineDrawing();
    //wait 1s then clear canv, reset game, allow click
    setTimeout(function () {clear(); resetGame();}, 900);
}

//This fn resets the game in the event of a tie or a win
function resetGame() {
    //This for loop iterates through each HTML square element
    for (let i = 0; i < 9; i++) {
        //This var gets the html element of i
        let square = document.getElementById(String(i))
        //This removes our element's bg image
        square.style.backgroundImage = ''
    }
    //This resets our array so it is empty and we can start over.
    selectedSquares = [];
}