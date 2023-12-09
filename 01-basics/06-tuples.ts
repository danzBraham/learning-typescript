// Define user tuple with two elements: id (number) and name (string)
const user: [number, string] = [1, 'Zidan'];
console.log(user); // Output: [1, "Zidan"]

// Define RGB tuple representing a color with three elements (red, green, blue)
const RGB: [number, number, number] = [255, 187, 87];
console.log(RGB); // Output: [255, 187, 87]

// Create a type alias "User" for a tuple with three elements (id, name, isActive)
type User = [number, string, boolean];

// Initialize a variable "newUser" of type User with initial values
let newUser: User = [2, 'Abra', true];
console.log(newUser); // Output: [2, "Abra", true]

// Update name element of newUser
newUser[1] = 'Zidan';
console.log(newUser); // Output: [2, "Zidan", true]

// Warning: Using array methods like push may modify the tuple and violate its defined structure.
// Consider using destructuring or dedicated tuple functions instead.
newUser.push('Siuuu!!!');
console.log(newUser); // Output: [2, "Zidan", true, "Siuuu!!!"]

// Export all declarations
export {};
