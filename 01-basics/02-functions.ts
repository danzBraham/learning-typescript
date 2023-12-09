function getRandomNumber(): number {
  return Math.floor(Math.random() * 10);
}

function addTwo(num: number): number {
  return num + 2;
}

function makeUpper(text: string): string {
  return text.toUpperCase();
}

function signUpUser(name: string, email: string, isAdmin: boolean) {
  return { name, email, isAdmin };
}

function loginUser(name: string, email: string, isAdmin: boolean = false) {
  return 'Logged In';
}

const sayHello = (text: string): string => `Hello ${text}`;

const animes = ['One Piece', 'Jujutsu Kaisen', 'Bleach', 'Naruto'];
const theAnime = animes.map((anime): string => `The Anime is ${anime}`);

function consoleError(msg: string): void {
  console.error(msg);
}

function handleError(msg: string): never {
  throw new Error(msg);
}

console.log(addTwo(getRandomNumber()));
console.log(makeUpper('abraham'));
console.log(signUpUser('Zidan', 'zidan@gmail.com', true));
console.log(loginUser('Zidan', 'zidan@gmail.com'));
console.log(sayHello('Zidan'));
console.log(theAnime);

export {};
