// Shallow - entrega o valor do ultimo objeto criado
// Utilizar quando não for alterar os valores originais do objeto
export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(public name: string, public age: number) {}

  clone(): this {
    const newObj = Object.create(this);
    return newObj;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

export class Address {
  constructor(public street: string, public number: number) {}
}

const address1 = new Address('Av Qualquer', 132);
const person1 = new Person('Gustavo', 40);
person1.addAddress(address1);
const person2 = person1.clone();

person1.addresses[0].street = 'Bla Bla Bla';

// Mostra o shallow dos valores age e addresses
person2.name = 'Person 2';
console.log(person2);
console.log(person2.name);
console.log(person2.age);
console.log(person2.addresses);
