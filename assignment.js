// USE DESTRUCTURING ASSIGNMENT TO ASSIGN VARIABLES FROM OBJECTS
/* var voxel = {x: 3.6, y: 7.4, z: 6.54 };

const{ x : a, y : b, z : c } = voxel; // a = 3.6, b = 7.4, c = 6.54


const AVG_TEMPERATURS = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
    "use strict";

    const { tomorrow : tempOfTomorrow } = avgTemperatures;

    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURS)); */






// USE DESTRUCTURING ASSIGNMENT TO ASSIGN VARIABLES FROM ARRAYS
const [z, x, , y] = [1, 2, 3, 4, 5, 6];
console.log(z, x, y);

let a = 8, b = 6;
(() => {
    "use strict";
    [a, b,] = [b, a]
})();
console.log(a);
console.log(b);