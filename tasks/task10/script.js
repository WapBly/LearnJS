'use strict';

const answer = prompt('Как официально называется JavaScript', '');
const rightName = 'ECMAScript';

if (answer == rightName){
  alert('Верно!');
} else {
  alert(`Неверно! ${rightName}`);
}