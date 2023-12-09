class User {
  protected _courseCount: number = 1;
  readonly city: string = 'Jakarta';

  constructor(public email: string, private password: string) {}

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(count) {
    if (count <= 1) {
      throw new Error('Course count should be more than 1');
    }
    this._courseCount = count;
  }
}

class SubUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 5;
  }
}

const zidan = new User('zidan@gmail.com', 'lsnvgiwahgbv');
console.log(zidan);
