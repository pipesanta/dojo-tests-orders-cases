import { expect } from "chai";
import { orderMock100k, orderMock200k } from "../mocks/addition.mock";
import { validateAdditionSurpriseBox } from "../../src/BusinessLogic/addition"

describe('Addition surprise box', () => { // the tests container

    it('Total value > 200.000 add surprise box', () => {
        let actualResult: string = validateAdditionSurpriseBox(orderMock200k);
        expect(actualResult).to.equal("Congratulations!!! He takes a surprise box");
    });

    it('Total value < 200.000 not add surprise box', () => {
        let actualResult: string = validateAdditionSurpriseBox(orderMock100k);
        expect(actualResult).to.equal("Sorry, you need more purchases to get a surprise box");
    });

});