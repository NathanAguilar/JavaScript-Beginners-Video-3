// WRITE RESUSABLE CODE WITH FUNCTIONS
// example
/* function ourReusableFunction() {
    console.log("Heyya, World")
}

ourReusableFunction();
ourReusableFunction();
ourReusableFunction();

function reusableFunction() {
    console.log("Hi world");
}

reusableFunction(); */





// PASSING VALUES TO FUNCTIONS WITH ARGUMENTS
/* function ourFunctionWithArgs(a, b) {
    console. log(a - b);
}
ourFunctionWithArgs(10, 5); // Outputs 5

// Only change code below this line.

function ourFunctionWithArgs(a, b) {
    console.log(a + b);
}

ourFunctionWithArgs(10, 5) */






// GLOBAL SCOPE AND FUNCTIONS
// Decalre your variable here
/* var myGlobal = 10;

function fun1() {
    oopsGlobal = 5;
}

function fun2(){
    var output "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if(typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal
    }
    console.log(output);
}
fun1();
fun2(); */







// LOCAL SCOPE AND FUNCTIONS
/* function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}
myLocalScope(); */






// GLOBAL vs. LOCAL SCOPE IN FUNCTIONS
/* var outerwear = "T-Shirt"

function myOutfit() {
    var outerWear = "sweater";

    return outerWear;
}

console.log(myOutfit())
console.log(outerWear) */

// RETURN A VALUE FROM A FUNCTION WITH RETURN
/* function minusSeven(num) {
    return num - 7;
}
console.log(minusSeven(10));

function timesFive(num) {
    return num * 5;
}

console.log(timesFive(5)); */






// UNDERSTANDING UNDEFINED VALUE RETURNED FROM A FUNCTION
// example 
/* var sum = 0;
function addThree() {
    sum = sum + 3;
}

function addFive() {
    sum += 5;
} */







// ASSIGNMENT WITH A RETURNED VALUE
/* var changed = 0;

function change(nun) {
    return (nun + 5) / 3;

}

changed = change(10);

var processed = 0;

function processArg(nun) {
    return (nun + 3) / 5;
}

processed = processArg(7); */






// STAND IN LINE
function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

