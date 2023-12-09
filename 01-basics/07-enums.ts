// Numeric enums
const enum Day {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

let today: Day = Day.Saturday;
console.log(today);

// String enums
const enum Direction {
  Up = 'UP',
  Right = 'RIGHT',
  Down = 'DOWN',
  Left = 'LEFT',
}

let move: Direction = Direction.Right;
console.log(move);

export {};
