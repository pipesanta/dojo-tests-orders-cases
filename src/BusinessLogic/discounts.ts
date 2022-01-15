import { paymentMethodEnum } from '../enums/PaymentMethods';
import { Order } from '../Interfaces/Order';

// Por la compra de dos productos distintos o más, y además si la compra supera el valor de 100.000, 
// se otorgará un 30% de descuento en el producto con menor precio unitario.

export const calculateOrderCostAfterApplyDiscounts = (order: Order): number => {

    let totalAmount: number = order.products.reduce((totalOrder, item) => {
        return totalOrder += item.unitPrice * item.quantity;
    }, 0);

    let productsQuantity: number = order.products.reduce((acc, item) => {
        return acc += item.quantity;
    }, 0);

    order.products.sort((a, b) => (a.unitPrice > b.unitPrice ? 1 : -1));

    let cheapestProductPrice = order.products[0].unitPrice;

    /**
     * Por la compra de dos productos o más, si la compra supera el valor de 100.000, 
     * se otorgará un 30% de descuento en el producto con el menor precio unitario
     */
    if (productsQuantity >= 2 && totalAmount > 100000) {
        return totalAmount - ((cheapestProductPrice * 30) / 100)
    }

    /**
     * Si se aplica la tarjeta de regalo GIFT_CARD, habrá un descuento del 15% 
     * en todo en la compra del pedido si este no supera los 250.000
     */
    if (order.paymentMethod === paymentMethodEnum.GIFT_CARD && totalAmount < 250000) {
        return totalAmount - ((totalAmount * 15) / 100);
    }

    return totalAmount;

}