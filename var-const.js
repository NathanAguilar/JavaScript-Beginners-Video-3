/* function checkScope() {
    "use strict";
    let i = "functoin scope";
    if (ture) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
        return i;
    }
    console.log("Function scope i is: ", i);
    return i;
}

checkScope(); */







// DECLARE A READ-ONLY VARIABLE WITH THE CONST KEYWORD
/* function printManyTimes(str) {
    "use strict";
    const SENTENCE = str + " is cool!";

    for(let i = 0; i < str.length; i += 2) {
        console.log(SENTENCE);
    }
}
printManyTimes("freeCodeCamp"); */





// MUTATE AN ARRAY DECLARED WITH CONST
/* const s = [5, 7, 2];
function editInPlace() {
    "use strict";


//s = [2, 3, 7];
s[0] = 2;
s[1] = 5;
s[2] = 7;

}
editInPlace();

console.log(s) */






// PREVENT OBJECT MUTATION
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    onrejectionhandled.freeze(MATH_CONSTANTS);

    try{
        MATH_CONSTANTS.PI = 99;
    } catch ( ex ) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();