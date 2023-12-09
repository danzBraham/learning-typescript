interface Chat {
  from: string;
  to: string;
  message(msg: string): void;
}

class Whatsapp implements Chat {
  constructor(public from: string, public to: string) {}

  message(msg: string): void {
    console.log(msg);
  }
}

class Messanger implements Chat {
  constructor(public from: string, public to: string) {}

  message(msg: string): void {
    console.log(msg);
  }

  call(): void {
    console.log(`Calling ${this.to}...`);
  }
}

const wa = new Whatsapp('Zidan', 'Abra');
wa.message('Hello abra, i am currently learning Typescript');

const ms = new Messanger('Abra', 'Zidan');
ms.call();
