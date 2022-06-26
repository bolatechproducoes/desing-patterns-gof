import { ProductDecorator } from './product-decorator';

export class ProductCustaomizationDecorator extends ProductDecorator {
  getName(): string {
    return this.product.getName() + ' (Customizada)';
  }

  getPrice(): number {
    return this.product.getPrice() + 50;
  }
}
