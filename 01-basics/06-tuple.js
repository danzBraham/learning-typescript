"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define user tuple with two elements: id (number) and name (string)
var user = [1, 'Zidan'];
console.log(user); // Output: [1, "Zidan"]
// Define RGB tuple representing a color with three elements (red, green, blue)
var RGB = [255, 187, 87];
console.log(RGB); // Output: [255, 187, 87]
// Initialize a variable "newUser" of type User with initial values
var newUser = [2, 'Abra', true];
console.log(newUser); // Output: [2, "Abra", true]
// Update name element of newUser
newUser[1] = 'Zidan';
console.log(newUser); // Output: [2, "Zidan", true]
// Warning: Using array methods like push may modify the tuple and violate its defined structure.
// Consider using destructuring or dedicated tuple functions instead.
newUser.push('Siuuu!!!');
console.log(newUser); // Output: [2, "Zidan", true, "Siuuu!!!"]
