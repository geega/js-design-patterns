import { Creator } from '../Common/Creator';
import { Product } from '../Common/IProduct';
import { ConcreteProduct2 } from '../Product/ConcreteProduct2';

export class ConcreteCreator2 extends Creator {
    /**
     * Note that the signature of the method still uses the abstract product
     * type, even though the concrete product is actually returned from the
     * method. This way the Creator can stay independent of concrete product
     * classes.
     */
    public factoryMethod(): Product {
        return new ConcreteProduct2();
    }
}