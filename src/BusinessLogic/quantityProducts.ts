import { Order } from "../Interfaces/Order";

//No se pueden comprar más de 10 unidades del mismo producto en una sola compra

export const countQuantityOfSameProduct = (order: Order): string => {
	let message:string = 'Gracias por su compra';
	
	let productsList = order.products.filter( (e) =>{
		return e.quantity > 10;
	});
	 message = productsList.length > 0 ?  'Esta compra no se puede realizar, la cantidad máxima de un mismo producto es 10!!!' : message;

	 return message;
	
}
