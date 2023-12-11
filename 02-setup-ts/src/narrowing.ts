// Narrowing with type guards
function detectId(id: string | null): string {
  if (!id) {
    return 'ID is required! Please provide it.';
  }
  return `Your ID is ${id}`;
}

// console.log(detectId(null));
// console.log(detectId('0xeuaghwiab'));

function paddingLeft(padding: number | string, input: string): string {
  if (typeof padding === 'number') {
    return ' '.repeat(padding) + input;
  }
  return padding + input;
}

// console.log(paddingLeft(7, 'Hello'));
// console.log(paddingLeft('Padding', 'Hello'));

function countCars(count: number): string {
  if (!count) {
    return 'There are no cars';
  }
  return `There are ${count} cars`;
}

// console.log(countCars(0));
// console.log(countCars(7));

function isString(arg: string | number): boolean {
  return typeof arg === 'string';
}

// console.log(isString('Hello'));

// Narrowing with truthiness
function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === 'object') {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === 'string') {
      console.log(strs);
    }
  }
}

// printAll(['He', 'll', 'oo']);
// printAll('Hello');

function multiplyAll(values: number[] | undefined, factor: number): number[] | undefined {
  if (!values) {
    return values;
  } else {
    return values.map((x) => x * factor);
  }
}

// console.log(multiplyAll([1, 2, 3, 4, 5], 3));

// Narrowing with in operator
interface Manager {
  name: string;
  email: string;
  managing: () => void;
}

interface Employee {
  name: string;
  email: string;
  working: () => void;
}

function checkPersonPosition(person: Manager | Employee) {
  if ('managing' in person) {
    return person.managing();
  }
  return person.working();
}

// Narrowing with instanceof
function logValue(x: Date | string): void {
  if (x instanceof Date) {
    console.log(x.toUTCString());
    return;
  }
  console.log(x.toUpperCase());
}

// logValue(new Date());
// logValue('hello');

// Narrowing with type predicates
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function petMove(pet: Fish | Bird) {
  if (isFish(pet)) {
    return pet.swim();
  }
  return pet.fly();
}

// Narrowing with discriminated unions
interface Circle {
  kind: 'circle';
  radius: number;
}

interface Square {
  kind: 'square';
  side: number;
}

interface Rectangle {
  kind: 'rectangle';
  width: number;
  height: number;
}

interface Triangle {
  kind: 'tri';
  side: number;
}

type Shapes = Circle | Square | Rectangle;

function getArea(shape: Shapes) {
  if (shape.kind === 'circle') {
    return Math.PI * shape.radius ** 2;
  } else if (shape.kind === 'rectangle') {
    return shape.width * shape.height;
  }
  return shape.side ** 2;
}

// Narrowing with exhaustive checking
function getPerimeter(shape: Shapes) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius * 2;
    case 'rectangle':
      return 2 * (shape.width + shape.height);
    case 'square':
      return 4 * shape.side;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
