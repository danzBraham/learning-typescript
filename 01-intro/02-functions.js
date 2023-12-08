"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getRandomNumber() {
    return Math.floor(Math.random() * 10);
}
function addTwo(num) {
    return num + 2;
}
function makeUpper(text) {
    return text.toUpperCase();
}
function signUpUser(name, email, isAdmin) {
    return { name: name, email: email, isAdmin: isAdmin };
}
function loginUser(name, email, isAdmin) {
    if (isAdmin === void 0) { isAdmin = false; }
    return 'Logged In';
}
var sayHello = function (text) { return "Hello ".concat(text); };
var animes = ['One Piece', 'Jujutsu Kaisen', 'Bleach', 'Naruto'];
var theAnime = animes.map(function (anime) { return "The Anime is ".concat(anime); });
function consoleError(msg) {
    console.error(msg);
}
function handleError(msg) {
    throw new Error(msg);
}
console.log(addTwo(getRandomNumber()));
console.log(makeUpper('abraham'));
console.log(signUpUser('Zidan', 'zidan@gmail.com', true));
console.log(loginUser('Zidan', 'zidan@gmail.com'));
console.log(sayHello('Zidan'));
console.log(theAnime);
