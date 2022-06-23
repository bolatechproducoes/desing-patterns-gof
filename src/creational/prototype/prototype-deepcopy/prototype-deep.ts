// Deep Copy - entrega o valor original do campo caso não haja valor
// Utilizar quando for necessário mudar os valores de alguns objetos
export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(public name: string, public age: number) {}

  clone(): Person {
    const newObj = new Person(this.name, this.age);
    newObj.addresses = this.addresses.map((item) => item.clone());
    return newObj;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

export class Address implements Prototype {
  constructor(public street: string, public number: number) {}

  clone(): Address {
    return new Address(this.street, this.number);
  }
}

const address1 = new Address('Av Qualquer', 132);
const person1 = new Person('Gustavo', 40);
person1.addAddress(address1);
const person2 = person1.clone();

person1.addresses[0].street = 'Bla Bla Bla';

person2.name = 'Person 2';
console.log(person2);
console.log(person2.name);
console.log(person2.age);
console.log(person2.addresses);

console.log();
console.log(person1);
console.log(person1.addresses);
