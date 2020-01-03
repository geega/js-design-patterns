import { Creator } from './Common/Creator';
export class ClientCode {
    constructor(private creator: Creator) {

    }


    public getResult () {
        return this.creator.someOperation();
    }
}