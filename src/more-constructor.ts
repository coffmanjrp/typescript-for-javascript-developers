export {};

class Person {
  constructor(public name: string, protected age: number) {}
}

const me = new Person('JR', 34);
console.log(me);
