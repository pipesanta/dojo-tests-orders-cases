import { Order } from "../Interfaces/Order";

//No se pueden comprar más de 10 unidades del mismo producto en una sola compra

export const countQuantityOfSameProduct = (order: Order): string => {
	let quantity: number = 0;
	order.products.forEach(element => {
		if (element.quantity > quantity) {
			quantity = element.quantity;
		}
	})
	if (quantity > 10) {
		return 'Esta compra no se puede realizar, la cantidad máxima de un mismo producto es 10!!!'
	}
	else {
		return 'Gracias por su compra'
	}
}
