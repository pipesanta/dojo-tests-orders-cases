
import { Order } from '../Interfaces/Order'; 

class ApplianceDiscountServiceImplemented {
    constructor(){}

    validateApplianceQuantity(order: Order): number {
        let occurrences:number = 0
        order.products.forEach(element => {
            element.categoryId===888 ? occurrences++: console.log("it is not an appliance")
        });
        return occurrences >= 2 ?  20 : 0
    }
}

export default new ApplianceDiscountServiceImplemented

/*
Si se compran dos productos de la categoría de electrodomésticos se obtendrá un descuento del 20% en la compra
*/