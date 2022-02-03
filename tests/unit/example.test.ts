
import { calculateOrderCostAfterApplyDiscounts } from '../../src/BusinessLogic/discounts';
import {
    orderMockOneProduct,
    orderMockTwoProductsGreaterThan100k,
    orderMockTwoProductsGreaterThan100kDiffSort,
    orderMockTwoProductsLessOrEqualThan100k
} from '../mocks/order.mock';

import { expect } from 'chai';


// ESTE ES SOLO UN EJEMPLO YA QUE ME FALTAN PONER MÁS CASOS POSIBLES, POR EJEMPLO, ENVIAR VARIOS PRODUCTOS QUE SUPEREN EN TOTAL LOS 100000
describe('Discount cheapest product', () => { // the tests container
    it('Just one product and purchase is greater than 100000', () => { // the single test
        let actualResult: number = calculateOrderCostAfterApplyDiscounts(orderMockOneProduct);
        expect(actualResult).to.equal(112000);
    });

    it('Two products and purchase is greater than 100000, products sorted descending by price', () => { // the single test
        let actualResult: number = calculateOrderCostAfterApplyDiscounts(orderMockTwoProductsGreaterThan100k);
        expect(actualResult).to.equal(104070);
    });

    it('Two products and purchase is greater than 100000, products sorted ascending by price', () => { // the single test
        let actualResult: number = calculateOrderCostAfterApplyDiscounts(orderMockTwoProductsGreaterThan100kDiffSort);
        expect(actualResult).to.equal(104070);
    });

    it('Two products and purchase is less or equal than 100000', () => { // the single test
        let actualResult: number = calculateOrderCostAfterApplyDiscounts(orderMockTwoProductsLessOrEqualThan100k);
        expect(actualResult).to.equal(59000);
    });

});