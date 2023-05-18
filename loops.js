// LTERATE WITH WHILE LOOPS
/* var myArray = [];

var i = 0;
while(i < 5) {
    myArray.push(i);
    i++;
}

console.log(myArray) */







// ITERATE WITH FOR LOOPS
/* var myArray = [];

for (var i = 1; i < 6; i++) {
    myArray.push(i);
}
console.log(myArray); */









// ITERATE ODD NUMBERS  WITH A FOR LOOP
/* var myArray = [];

for (var i = 1; i < 10; i += 2) {
    myArray.push(i);
}

console.log(myArray); */







// COUNT BACKWARDS WITH A FOR LOOP
/* var myArray = [];

for (var i = 9; i > 0; i -= 2) {
    myArray.push(i);
}

console.log(myArray); */







// ITERATE THROUGH AN ARRAY WITH A FOR LOOP
/* var myArr = [2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
    total += myArr[i];

}

console.log(total); */








// NESTING FOR LOOPS
/* function multiplyAll(arr) {
    var product = 1;

    for (var i = 0; i < arr.length; i++) {
    for (var j = 0;j < arr[i].length; j++){
        product *= arr[i][j];
    }
}

return product;
}

var product = multiplyAll([[1,2], [3,4], [5,6,7]]);

console.log(product); */




// ITERATE WITH DO... WHILE LOOPS
var myArray = [];
var i = 10;


do {
    myArray.push(i);
    i++;
} while (i < 5)

console.log(i, myArray)