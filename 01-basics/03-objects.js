"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createCourse(course) {
    console.log(course);
}
function createUser(user) {
    console.log(user);
}
var newUser = {
    _id: 'sjavn1425sgy3861681',
    name: 'Abraham',
    email: 'abra@gmail.com',
    isVerified: true,
};
var newUser2 = {
    _id: 'sjavn1425sgy3861681',
    name: 'Zidan',
    email: 'zidan@gmail.com',
    isVerified: true,
    cardDetails: 927871489165761,
};
createCourse({ name: 'NextJS Course', price: 799 });
createUser(newUser);
createUser(newUser2);
