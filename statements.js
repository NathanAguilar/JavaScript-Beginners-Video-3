// SWITCH STATEMENTS
/* function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "alpha"; 
            break;
        case 2:
            answer = "beta";
            break;
        case 4:
            answer = "gamma";
            break;
        case 5:
            answer = "delta";
            break;    
    }

    return answer;
}

console.log(caseInSwitch(1)); */










// DEFAULT OPTION IN SWITCH STATEMENTS
/* function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break; 
        case "c":
            answer = "cat";
            break;       
        default:
            answer = "stuff"
            break;
    }
    return answer;
}

console.log(switchOfStuff(5)); */









// MULTIPLE IDENTICAL OPTIONS IN SWITCH STATEMENTS
/* function sequentialSizes(val) {
    var answer = "";
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}

console.log(sequentialSizes(8)); */







/* // RETURNING BOOLEAN VALUES FROM FUNCTIONS
function isLess(a, b){
    return a < b;
}

console.log(isLess(20, 15)); */






// COUNTING CARDS
var count = 0;

function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":    
        case "A":
            count--;
            break;    
}

var holdbet = 'Hold'
if (count > 0) {
    holdbet = 'Bet'
}
return count + " " + holdbet;

}

cc(2); cc('K'); cc(10); cc('K'); cc('A');
console.log(cc(4));