// USE ARROW FUNCTIONS TO WRITE CONCISE ANONYMOUS FUNCTIONS
// const magic = () => new Date();






// WRITE ARROW FUNCTIONS WITH PARAMETERS
/* const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5])); */






// WRITE HIGHER ORDER ARROW FUNCTIONS
/* const increment = (function()   {
    return function increment(number, value = 1) {
        return number + value;
    };
})();
console.log(increment(5, 2));
cpnsole.log(increment(5)); */







// USE THE REST OPERATOR WITH FUNCTION PARAMETERS
/* const sum = (function() {
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3, 4)); */







// USE THE SPREAD OPERATOR TO EVALUATE ARRAYS IN-PLACE
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
    arr2 = [...arr1];
    arr1[0] = 'potato'
})();
console.log(arr2);






