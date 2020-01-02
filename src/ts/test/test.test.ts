import { expect } from 'chai';
import { Main } from  '../MyTest/Main';
 
describe('bar', () => {
    it('sync function returns true', () => {

        expect(true).to.be.true;
    });
    it('Main:test()', () => {
    	const m = new Main();
    	m.test();

        expect(true).to.be.true;
    });
});