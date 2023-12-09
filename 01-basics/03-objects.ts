type Course = {
  name: string;
  price: number;
};

function createCourse(course: Course): void {
  console.log(course);
}

interface User {
  readonly _id: string;
  name: string;
  email: string;
  isVerified: boolean;
  cardDetails?: number;
}

function createUser(user: User): void {
  console.log(user);
}

let newUser: User = {
  _id: 'sjavn1425sgy3861681',
  name: 'Abraham',
  email: 'abra@gmail.com',
  isVerified: true,
};

let newUser2: User = {
  _id: 'sjavn1425sgy3861681',
  name: 'Zidan',
  email: 'zidan@gmail.com',
  isVerified: true,
  cardDetails: 927871489165761,
};

createCourse({ name: 'NextJS Course', price: 799 });
createUser(newUser);
createUser(newUser2);

export {};
