import { orderMockMoreThanTenUnitsOfSameProduct, orderMockLessThanElevenUnitsOfSameProduct } from "../mocks/quantityProducts.mock"
import { countQuantityOfSameProduct } from "../../src/BusinessLogic/quantityProducts"
import { expect } from "chai";

describe('Quantity of the same product', () => {
	it('Exceeds the maximum quantity of the same product, which is 10', () => {
		let response: string = countQuantityOfSameProduct(orderMockMoreThanTenUnitsOfSameProduct);
		expect(response).to.equal('Esta compra no se puede realizar, la cantidad máxima de un mismo producto es 10!!!');
	});
	it('Valid purchase', () => {
		let response: string = countQuantityOfSameProduct(orderMockLessThanElevenUnitsOfSameProduct);
		expect(response).to.equal('Gracias por su compra');
	});
});


