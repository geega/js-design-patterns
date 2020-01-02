"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Main_1 = require("../MyTest/Main");
describe('bar', () => {
    it('sync function returns true', () => {
        chai_1.expect(true).to.be.true;
    });
    it('Main:test()', () => {
        const m = new Main_1.Main();
        m.test();
        chai_1.expect(true).to.be.true;
    });
});
//# sourceMappingURL=test.test.js.map