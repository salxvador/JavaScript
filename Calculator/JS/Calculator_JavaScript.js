//create obj to keep track of values:
const Calculator = {
    // display 0 on screen
    display_value: '0',
    //this will hold the first op for any expressions
    first_operand: null,
    //this will check whether the 2nd op has been input
    wait_second_operand: false,
    //will hold the operator
    operator: null,
};

//This modifies values each time a button is clicked
function input_digit(digit) {
    const { display_value, wait_second_operand } = Calculator;
    //we are checking to see if second operand is true and set
    //display value to the key that was clicked
    if (wait_second_operand === true) {
        Calculator.display_value = digit;
        Calculator.wait_second_operand = false;
    } else {
        //this overwrites display value if it is 0
        //otherwise it adds into it.
        Calculator.display_value = display_value === '0' ? digit : display_value + digit;
    }
}
//This section handles decimal points
function input_decimal(dot) {
    //This ensures that accidental clicking of the dec point
    //doesnt cause bugs in operation
    if (Calculator.wait_second_operand === true) return;
    if (!Calculator.display_value.includes(dot)) {
        //we are saying that if the display value does not contain a dec point
        //we want to add a dec point
        Calculator.display_value += dot;
    }
}

//this section handles operators
function handle_operator(next_operator) {
    const {first_operand, display_value, operator} = Calculator
    //when an operator key is pressed, we convert the current number
    //displayed on the screen to a number then store the result in
    //calculator.first_operand if it doesnt already exist.
    const value_of_input = parseFloat(display_value);
    //checks if an operator already exists and if wait_second_operand is true,
    //Then updates the operator and exits from the fn.
    if (operator && Calculator.wait_second_operand) {
        Calculator.operator = next_operator;
        return;
    }
    if (first_operand == null) {
        Calculator.first_operand = value_of_input;
    } else if (operator) { //checks if an operator already exists.
        const value_now = first_operand || 0;
        //if operator exists, property lookup is performed for the operator
        //in the perform_calculation object and the function that matches the
        //operator is executed.
        let result = perform_calculation[operator] (value_now, value_of_input);
        //here we add a fixed about of numbers after the decimal
        result = Number(result).toFixed(9)
        //This will remove any trailing 0's
        result = (result * 1).toString()
        Calculator.display_value = parseFloat(result);
        Calculator.first_operand = parseFloat(result);
    }
    Calculator.wait_second_operand = true;
    Calculator.operator = next_operator;
}

const perform_calculation = {
    '/': (first_operand, second_operand) => first_operand / second_operand,
    '*': (first_operand, second_operand) => first_operand * second_operand,
    '+': (first_operand, second_operand) => first_operand + second_operand,
    '-': (first_operand, second_operand) => first_operand - second_operand,
    '=': (first_operand, second_operand) => second_operand 
};

function calculator_reset() {
    Calculator.display_value = '0';
    Calculator.first_operand = null;
    Calculator.wait_second_operand = false;
    Calculator.operator = null;
}

//This Fn updates the screen with the contents of display_value
function update_display() {
    const display = document.querySelector('.calc-screen');
    display.value = Calculator.display_value;
}

update_display();
//THis section monitors button clicks
const keys = document.querySelector('.calc-keys');
keys.addEventListener('click', (event) => {
    //The target variable is an object that represents the element that was clicked.
    const { target } = event;
    //if the element that was clicked on is not a button, exit the function
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        handle_operator(target.value);
        update_display();
        return;
    }
    if (target.classList.contains('decimal')) {
        input_decimal(target.value);
        update_display();
        return;
    }
    //ensures that AC clears the numbers from the calc
    if (target.classList.contains('all-clear')) {
        calculator_reset();
        update_display();
        return;
    }
    input_digit(target.value);
    update_display();
})

