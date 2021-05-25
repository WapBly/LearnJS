'use strict';

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

salaries.Bill = 100;

let sum = 0;

for (let key in salaries) {
    sum += salaries[key];
}

alert(sum);