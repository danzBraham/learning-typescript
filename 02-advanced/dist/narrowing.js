"use strict";
// Narrowing with type guards
function detectId(id) {
    if (!id) {
        return 'ID is required! Please provide it.';
    }
    return `Your ID is ${id}`;
}
// console.log(detectId(null));
// console.log(detectId('0xeuaghwiab'));
function paddingLeft(padding, input) {
    if (typeof padding === 'number') {
        return ' '.repeat(padding) + input;
    }
    return padding + input;
}
// console.log(paddingLeft(7, 'Hello'));
// console.log(paddingLeft('Padding', 'Hello'));
function countCars(count) {
    if (!count) {
        return 'There are no cars';
    }
    return `There are ${count} cars`;
}
// console.log(countCars(0));
// console.log(countCars(7));
function isString(arg) {
    return typeof arg === 'string';
}
// console.log(isString('Hello'));
// Narrowing with truthiness
function printAll(strs) {
    if (strs) {
        if (typeof strs === 'object') {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === 'string') {
            console.log(strs);
        }
    }
}
// printAll(['He', 'll', 'oo']);
// printAll('Hello');
function multiplyAll(values, factor) {
    if (!values) {
        return values;
    }
    else {
        return values.map((x) => x * factor);
    }
}
function checkPersonPosition(person) {
    if ('managing' in person) {
        return person.managing();
    }
    return person.working();
}
// Narrowing with instanceof
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
        return;
    }
    console.log(x.toUpperCase());
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function petMove(pet) {
    if (isFish(pet)) {
        return pet.swim();
    }
    return pet.fly();
}
function getArea(shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius ** 2;
    }
    else if (shape.kind === 'rectangle') {
        return shape.width * shape.height;
    }
    return shape.side ** 2;
}
// Narrowing with exhaustive checking
function getPerimeter(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius * 2;
        case 'rectangle':
            return 2 * (shape.width + shape.height);
        case 'square':
            return 4 * shape.side;
        default:
            const _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
