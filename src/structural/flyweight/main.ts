import { DeliveryContext } from './delivery/delivery-context';
import { DeliveryFactory } from './delivery/delivery-factory';

const factory = new DeliveryFactory();
DeliveryContext(factory, 'Gustavo', '70B', 'Av Nenhuma', 'Jlle');
DeliveryContext(factory, 'Fulano', '70B', 'Av Nenhuma', 'Jlle');
DeliveryContext(factory, 'Ciclano', '73', 'Av Nenhuma', 'Jlle');
DeliveryContext(factory, 'Beltrano', '7', 'Rua A', 'Fpolis');
DeliveryContext(factory, 'Transeunte', '?', 'Rua', 'Anywhere');
DeliveryContext(factory, 'Gustavo', '70B', 'Av Nenhuma', 'Jlle');
DeliveryContext(factory, 'Fulano', '70B', 'Av Nenhuma', 'Jlle');
DeliveryContext(factory, 'Ciclano', '73', 'Av Nenhuma', 'Jlle');
DeliveryContext(factory, 'Beltrano', '7', 'Rua A', 'Fpolis');
DeliveryContext(factory, 'Transeunte', '?', 'Rua', 'Anywhere');
DeliveryContext(factory, 'Gustavo', '70B', 'Av Nenhuma', 'Jlle');
DeliveryContext(factory, 'Fulano', '70B', 'Av Nenhuma', 'Jlle');
DeliveryContext(factory, 'Ciclano', '73', 'Av Nenhuma', 'Jlle');
DeliveryContext(factory, 'Beltrano', '7', 'Rua A', 'Fpolis');
DeliveryContext(factory, 'Transeunte', '?', 'Rua', 'Anywhere');

console.log();
console.log(factory.getLocations());
