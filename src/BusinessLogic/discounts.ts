
import { Order } from '../Interfaces/Order'; 

// Por la compra de dos productos o más, que cada uno supere 
// el valor de 100.000, se otorgará un 30% de descuento en el producto con el menor valor.
export const calculateDiscountTwoProductsWithPricegreaterThat100k = ( order: Order ): number => {  
    let finalPriceCheaperValue: number;
    let total: number = order.products.reduce( (totalOrder, item) =>{
        return totalOrder += item.unitPrice;
    }, 0);
    order.products.sort( (a , b)=> (a.unitPrice > b.unitPrice ? 1 : -1));
    let priceCheaperValue: number = order.products[0].unitPrice;
    if (order.products.length >= 2 && total > 100000) {
        finalPriceCheaperValue = priceCheaperValue - ((priceCheaperValue*30)/100)
    } else {
        finalPriceCheaperValue = priceCheaperValue;
    }
    return finalPriceCheaperValue;
}

 
