function getReceipt() {
    //This initializes our string so it can get passed from 
    //fn to fn, growing line by line into a full receipt.
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 += selectedSize + "<br>";
        }
    } 
    if (selectedSize === "Personal Pizza") { sizeTotal = 6; }
    else if (selectedSize === "Small Pizza") { sizeTotal = 8; }
    else if (selectedSize === "Medium Pizza") { sizeTotal = 10; }
    else if (selectedSize === "Large Pizza") { sizeTotal = 14; }
    else if (selectedSize === "Extra Large Pizza") { sizeTotal = 16; }
    else if (selectedSize === "Party Pizza") { sizeTotal = 18; }

    runningTotal = sizeTotal; //first element of price is pizza size
console.log(selectedSize + " = $" + sizeTotal + ".00");
console.log("size text1: " + text1);
console.log("subtotal: $" + runningTotal + ".00");
//These vars will get passed on to each fn
getTopping(runningTotal, text1);

};


//This will add in meats:
function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = []; //initialized as empty set
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) { //checked method chcks if the checkbox input type has been checked by the user
            selectedTopping.push(toppingArray[j].value); //add all 'checked' toppings to the selectedToppings array
            console.log("selected topping item: (" + toppingArray[j].value + ")");
            text1 += toppingArray[j].value + "<br>";
        }
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1); //subtract 1 from topping count because 1 topping is free.
    } else {                                //Each topping is $1
        toppingTotal = 0;
    }
    runningTotal += toppingTotal; //add number of toppings ($1) to running total
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + "topping - 1 free topping = " + "$" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase total: $" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1; //add list of selections to div element
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal //add total price to div element
        +".00" + "</strong></h3>";
}
