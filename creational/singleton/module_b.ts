import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabase as myDatabaseModuleA } from './module_a';

const myDatabase = MyDatabaseFunction;
myDatabase.add({ name: 'Fulana', age: 45 });
myDatabase.add({ name: 'Beltrana', age: 35 });
myDatabase.add({ name: 'Ciclana', age: 28 });
myDatabase.show();

console.log(myDatabase === myDatabaseModuleA);
