import { MyIteratorProtocol } from './my-iterator-protocol';
import { MyDefaultIterator } from './my-default-iterator';

export class MyDataStructure {
  private _items: string[] = [];
  private iterator: MyIteratorProtocol<string> = new MyDefaultIterator(this);

  addItem(...items: string[]): void {
    items.forEach((item) => this.items.push(item));
  }

  get items(): string[] {
    return this._items;
  }

  size(): number {
    return this.items.length;
  }

  changeIterator(iterator: MyIteratorProtocol<string>): void {
    this.iterator = iterator;
  }

  //Permite fazer a desestrururação da iteração
  [Symbol.iterator](): MyIteratorProtocol<string> {
    //Para reiniciar toda a vez que o iterador for chamado reseta-lo aqui
    //this.iterator.reset();
    return this.iterator;
  }

  resetIterator(): void {
    this.iterator.reset();
  }
}
