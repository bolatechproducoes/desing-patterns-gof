import { MyDatabaseFunction } from './db/my-database-function';

const myDatabase = MyDatabaseFunction;
myDatabase.add({ name: 'Gustavo', age: 40 });
myDatabase.add({ name: 'Fulano', age: 25 });
myDatabase.add({ name: 'Ciclano', age: 78 });

export { myDatabase };
