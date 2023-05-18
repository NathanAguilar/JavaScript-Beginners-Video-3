// BOOLEAN VALUES
/* function welcomeToBooleans() {
    return true;

} */





// USE CONDITIONAL LOGIC WITH IF STATEMENTS
/* function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No it's false"
}

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true"
    }
    return "No, that was false";
}

console.log(trueOrFalse(true)); */







// COMPARISON WITH THE EQUALITY OPERATOR
/* function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(10)); */








// COMPARISON WITH THE STRICT EQUALITY OPERATOR
/* function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}

testStrict(10); */

/* 
3 == 3
3 === '3' */








// PRACTICE COMPARING DIFFERENT VALUES
/* function compareEquality(a, b) {
    if (a === b) {   // Change this line
        return "Equal";
    }
    return "Not Equal";
}


console.log(compareEquality(10, "10")); */








// COMPARISON WITH THE INEQUALITY OPERATOR
/* function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}

console.log(testNotEqual(10)); */







// COMPARISON WITH STRICT INEQUALITY OPERATOR
/* function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}

console.log(testStrictNotEqual(10)) */






// COMPARISONS WITH THE LOGICAL AND OPERATOR
/* function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }

    if (val > 10) {
        return "Over 10"
    }

    return "10 or Under";
}

console.log(testGreaterThan(10))*/









// COMPARISONS WITH THE GREATER THAN OR EQUAL TO OPERATOR
/* function testGreaterOrEqual(val) {
if (val >= 20) {
    return "20 or Over";
}

if (val >= 10) {
    return "10 or Over"
}

return "Less than 10";
}

console.log(testGreaterOrEqual(10)); */








// COMPARISON WITH THE LESS THAN OPERATOR
/* function testLessThan(val) {
    if (val < 25) {
     return "Under 25";
}

if (val < 55) {
    return "Under 55";
}

return "55 or Over";
}

console.log(testLessThan(10);) */










// COMPARISON WITH THE LESS THAN OR EQUAL TO OPERATOR
/* function testLessOrEqual(val) {
    if (val <= 12) {
        return "Smaller Than Or Equal to 12"
    }

    if (val <= 24) {
        return "Smaller Than or Equal to 24";
    }

    return "More Than 24";
}

console.log(testLessOrEqual(10)); */









// COMPARISONS WITH THE LOGICAL AND OPERATOR
/* function testLogicalAnd(val) {

    if (val <= 50 && val >= 25) {
        return "Yes";
        }
    return "No";
}

testLogicalAnd(10); */









// COMPARISONS WITH THE LOGICAL OR OPERATOR
/* function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }

    return "Inside";
}

testLogicalOr(15); */










// ELSE STATEMENTS
/* function testElse(val) {
    var result = "";

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller"
    }

    return result;
}
testElse(4); */









// Else if Statements
/* function testElseIf(val) {
    if (val >10) {
        return "Greater than 10";
    } else if (val < 5 ) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10"
    }
}

testElseIf(7); */






// LOGICAL ORDER IN OF ESLE STATEMENTS
/* function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5"
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or qual to 10"
    }
}

console.log(orderMyLogic(3)); */









// CHANGING IF ELSE STATEMENTS
function testSize(num) {
    if (nun < 5) {
        return "Tiny"
    }else if (num < 10) {
        return "Small"
    }else if (num < 15) {
        return "Medium"
    }else if (num < 20) {
        return "Large"
    }else {
        return "Huge"
    }
}

console.log(testSize(19)); 
