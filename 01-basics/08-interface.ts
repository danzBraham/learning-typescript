interface User {
  readonly id: number;
  username: string;
  password: string;
  isVerified: boolean;
  googleId?: number;
  sayHello(): string;
  getDiscount(value: number): number;
}

interface User {
  githubToken: string;
}

interface Admin extends User {
  role: 'admin' | 'tech lead';
}

const zidan: Admin = {
  id: 1,
  username: 'Zidan',
  password: 'wojwabawbnonb',
  isVerified: true,
  googleId: 8245868165681,
  githubToken: 'githubmvmeaenv',
  role: 'admin',
  sayHello: () => 'Hello',
  getDiscount: (value = 10) => value,
};

console.log(zidan);

export {};
