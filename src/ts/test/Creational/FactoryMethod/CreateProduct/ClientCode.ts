import { expect } from 'chai';
import { ConcreteCreator1 } from '../../../../Creational/FactoryMethod/CreateProduct/Creator/ConcreteCreator1';
import { ClientCode } from '../../../../Creational/FactoryMethod/CreateProduct/ClientCode';
import { ConcreteCreator2 } from '../../../../Creational/FactoryMethod/CreateProduct/Creator/ConcreteCreator2';

describe('ClientCode', () => {
    it('Product 1 ', () => {
        const creator = new ConcreteCreator1();
        const client = new ClientCode(creator);

        expect(client.getResult()).equal(`Creator: The same creator's code has just worked with {Result of the ConcreteProduct1}`);
    });
    it('Product 2 ', () => {
        
        const creator = new ConcreteCreator2();
        const client = new ClientCode(creator);

        expect(client.getResult()).equal(`Creator: The same creator's code has just worked with {Result of the ConcreteProduct2}`);
    });
});