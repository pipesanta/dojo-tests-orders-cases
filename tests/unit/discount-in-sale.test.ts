import { assert, expect } from "chai";
import { applianceDiscountOrder, applianceNotDiscountOrder } from "../mocks/discount.mock";
import  ApplianceDiscountServiceImplemented  from "../../src/BusinessLogic/appliance-discount"

describe('discount in total sale', () => { // the tests container

    it('must get 20% of discount', () => {
        let discount: number = ApplianceDiscountServiceImplemented.validateApplianceQuantity(applianceDiscountOrder);
        assert(discount===20)
    });

    it('must get 0% of discount', () => {
        let discount: number = ApplianceDiscountServiceImplemented.validateApplianceQuantity(applianceNotDiscountOrder);
        assert(discount===0)
    });

});