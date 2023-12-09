"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 77;
score = 'seventy seven';
console.log(score);
var user = {
    id: 1,
    name: 'Zidan',
};
user = {
    id: 1,
    username: 'Abra',
};
function sayHello(value) {
    if (typeof value === 'string') {
        console.log(value.toUpperCase());
    }
    else if (typeof value === 'number') {
        console.log(value.toLocaleString());
    }
}
sayHello('Zidan');
sayHello(7);
var data = [1, 'two', 3, 'four', 5, 'six'];
console.log(data);
var element;
element = 'fire';
element = 'water';
element = 'earth';
element = 'wind';
console.log(element);
