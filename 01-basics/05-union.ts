let score: number | string = 77;
score = 'seventy seven';
console.log(score);

interface User {
  id: number;
  name: string;
}

interface Admin {
  id: number;
  username: string;
}

let user: User | Admin = {
  id: 1,
  name: 'Zidan',
};

user = {
  id: 1,
  username: 'Abra',
};

function sayHello(value: string | number): void {
  if (typeof value === 'string') {
    console.log(value.toUpperCase());
  } else if (typeof value === 'number') {
    console.log(value.toLocaleString());
  }
}

sayHello('Zidan');
sayHello(7);

const data: (string | number)[] = [1, 'two', 3, 'four', 5, 'six'];
console.log(data);

let element: 'fire' | 'earth' | 'water' | 'wind';
element = 'fire';
element = 'water';
element = 'earth';
element = 'wind';

console.log(element);

export {};
