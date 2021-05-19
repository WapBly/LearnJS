'use sctrict';

let pow = (a, b) => a ** b; 

let a = +prompt('a', '');
let b = +prompt('b', '');

if (b < 1) {
    alert ( `Степень ${b} не поддерживается, введите натуральное число` );
} else {
    alert ( pow(a, b) );
}