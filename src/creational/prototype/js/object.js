const personPrototype = {
  firstName: 'Gustavo',
  lastName: 'Melim',
  age: 40,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

// Exemplo de herança de prototype, o objeto vazio criado a partir de outro
// objeto busca no prototype (shadow) o valor do campo que estiver vazio
const anotherPerson = Object.create(personPrototype);
anotherPerson.firstName = 'Fulano';
console.log(anotherPerson);
console.log(anotherPerson.firstName);
console.log(anotherPerson.fullName());
