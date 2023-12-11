"use strict";
class Whatsapp {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
    message(msg) {
        console.log(msg);
    }
}
class Messanger {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
    message(msg) {
        console.log(msg);
    }
    call() {
        console.log(`Calling ${this.to}...`);
    }
}
const wa = new Whatsapp('Zidan', 'Abra');
wa.message('Hello abra, i am currently learning Typescript');
const ms = new Messanger('Abra', 'Zidan');
ms.call();
