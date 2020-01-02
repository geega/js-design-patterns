"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Main {
    constructor() {
        this.isFix = false;
    }
    test() {
        console.log('Main', 'test', 112);
    }
    fix() {
        this.isFix = true;
        console.trace('Fix');
    }
}
exports.Main = Main;
//# sourceMappingURL=Main.js.map