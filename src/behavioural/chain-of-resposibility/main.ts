import { CeoBudgetHandler } from './ceo-budget-handler';
import { CustomerBudget } from './customer-budget';
import { DirectorBudgetHandler } from './director-budget-handler';
import { ManagerBudgetHandler } from './manager-budget-handler';
import { SellerBudgetHandler } from './seller-budget-handler';

const customerBudget = new CustomerBudget(50);
const customerBudget1 = new CustomerBudget(1001);
const customerBudget2 = new CustomerBudget(5001);
const customerBudget3 = new CustomerBudget(50001);

// Chain of Responsibility - sequência de classes que irão tratar a requisição
// a que resolver retorna ao cliente.
const seller = new SellerBudgetHandler();
seller
  .setNextHandler(new ManagerBudgetHandler())
  .setNextHandler(new DirectorBudgetHandler())
  .setNextHandler(new CeoBudgetHandler());

seller.handle(customerBudget);
seller.handle(customerBudget1);
seller.handle(customerBudget2);
seller.handle(customerBudget3);
console.log(customerBudget);
console.log(customerBudget1);
console.log(customerBudget2);
console.log(customerBudget3);
