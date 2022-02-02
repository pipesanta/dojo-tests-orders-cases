
import {
    calculateOrderCostAfterApplyDiscounts
} from '../../src/BusinessLogic/discounts';
import {
    orderMockPaidWithGiftCard,
    orderMockPaidWithCreditCard,
    orderMockPaidWithGiftCardGreaterThan250K
} from '../mocks/order.mock';

import { expect } from 'chai';

describe('TESTS PAYMENT METHODS', () => {

    it('# With CREDIT_CARD', () => {
        let actualResult: number = calculateOrderCostAfterApplyDiscounts(orderMockPaidWithCreditCard);
        expect(actualResult).to.equal(25);
    });

    it('# With GIFT_CARD', () => {
        let actualResult: number = calculateOrderCostAfterApplyDiscounts(orderMockPaidWithGiftCard);
        expect(actualResult).to.equal(20400);
    });

    it('# With GIFT_CARD BUT MORE THAN 250K', () => {
        let actualResult: number = calculateOrderCostAfterApplyDiscounts(orderMockPaidWithGiftCardGreaterThan250K);
        expect(actualResult).to.equal(420000);
    });

});