'use strict';

let i = +prompt('Введите число', '');

if (i < 0){
    alert(-1);
} else if (i > 0){
    alert(1);
} else {
    alert(0);
}