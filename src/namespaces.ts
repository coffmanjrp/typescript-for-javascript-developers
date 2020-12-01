export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}

    fullName(): string {
      return `${this.firstName} ${this.middleName} ${this.lastName}`;
    }
  }
}

const me = new Japanese.Tokyo.Person('JR');
console.log(me.name);
const i = new English.Person('Paul', 'Ellison Ray', 'Coffman Jr.');
console.log(i.fullName());
const wai = new Japanese.Osaka.Person('Masami');
console.log(wai.name);
