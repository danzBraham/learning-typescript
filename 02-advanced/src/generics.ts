// Not recommended: `number | boolean` union type can be cumbersome and less clear than generics.
function identityOne(val: number | boolean): number | boolean {
  return val;
}

// Not recommended: `any` type allows assigning and returning values of any type, losing type safety and clarity.
function identityTwo(val: any): any {
  return val;
}

// Recommended: Generic type `T` provides type safety and clarity, allowing various types to be used.
function identityThree<T>(val: T): T {
  return val;
}

interface User {
  readonly id: number;
  username: string;
  password: string;
  isVerified: boolean;
}

// Declare and initialize a user object using the `User` interface.
const user: User = {
  id: 1,
  username: 'abra',
  password: 'wnbkabiaer',
  isVerified: true,
};

console.log(identityThree(7));
console.log(identityThree(user));

// Generate random index
function getRandomIndex(arr: readonly any[]): number {
  if (arr.length === 0) {
    throw new Error('Cannot get random index from empty array!');
  }
  return Math.floor(Math.random() * arr.length);
}

// Generic reguler function version
function searchProduct<T>(products: T[]): T {
  const index = getRandomIndex(products);
  return products[index];
}

// Generic arrow function version
const getProduct = <T>(products: T[]): T => {
  const index = getRandomIndex(products);
  return products[index];
};

const products: string[] = [
  'Shoes',
  'Bag',
  'T-Shirt',
  'Skirt',
  'Jacket',
  'Pants',
  'Hoodie',
  'Hat',
  'Glasses',
  'Watch',
  'Tuxedo',
];

console.log(searchProduct(products));
console.log(getProduct(products));

// This function retrieves a specific property from an object using a generic type
// and a key that is guaranteed to exist in the object.
function getProperty<T, Key extends keyof T>(obj: T, key: Key): T[Key] {
  return obj[key];
}

const x = { a: 1, b: 2, c: 3 };

// Accessing a valid property.
console.log(getProperty(x, 'a'));
// Accessing a non-existent property.
console.log(getProperty(x, 'b'));
// Accessing a non-existent property.
console.log(getProperty(x, 'c'));

// This class represents a generic supermarket that can store any type of product.
class Supermarket<T> {
  // The cart is a public array that stores the products.
  public cart: T[] = [];

  // This method adds a new product to the cart.
  addToCart(product: T) {
    this.cart.push(product);
  }
}

// Create a new supermarket instance specifically for string products.
const shop: Supermarket<string> = new Supermarket();

// Add different products to the cart.
shop.addToCart('Durian');
shop.addToCart('Apple');
shop.addToCart('Banana');

// Print the contents of the cart.
console.log(shop.cart);
