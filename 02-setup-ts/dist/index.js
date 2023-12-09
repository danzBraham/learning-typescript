"use strict";
class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
        this._courseCount = 1;
        this.city = 'Jakarta';
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
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
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 5;
    }
}
const zidan = new User('zidan@gmail.com', 'lsnvgiwahgbv');
console.log(zidan);
