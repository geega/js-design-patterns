import { Product } from '../Common/IProduct';

export class ConcreteProduct2 implements Product {
    
    public operation(): string {
        return '{Result of the ConcreteProduct2}';
    }
}