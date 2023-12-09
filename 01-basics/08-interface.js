"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zidan = {
    id: 1,
    username: 'Zidan',
    password: 'wojwabawbnonb',
    isVerified: true,
    googleId: 8245868165681,
    githubToken: 'githubmvmeaenv',
    role: 'admin',
    sayHello: function () { return 'Hello'; },
    getDiscount: function (value) {
        if (value === void 0) { value = 10; }
        return value;
    },
};
console.log(zidan);
