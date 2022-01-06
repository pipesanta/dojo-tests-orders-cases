
import { calculateDiscountTwoProductsWithPricegreaterThat100k } from '../../src/BusinessLogic/discounts';
import { sayHello } from '../../src/BusinessLogic/helloworld'
import { Order } from '../../src/Interfaces/Order';
import { orderMock } from '../mocks/order.mock';

import { expect } from 'chai';

// ESTE ES SOLO UN EJEMPLO YA QUE ME FALTAN PONER MÁS CASOS POSIBLES, POR EJEMPLO, ENVIAR VARIOS PRODUCTOS QUE SUPEREN EN TOTAL LOS 100000
describe('Discount cheapest product', () => { // the tests container
    it('Just one product with unit price greater than 100000', () => { // the single test


        let actualResult: number = calculateDiscountTwoProductsWithPricegreaterThat100k(orderMock);
        expect(actualResult).to.equal(200000);
    });
});