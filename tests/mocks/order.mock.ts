import { Order } from "../../src/Interfaces/Order";

export  const orderMock: Order = {
    orderId: "A92B-01",
    products: [{
        productId: 1,
        categoryId: 6,
        unitPrice: 200000,
        quantity: 2
    }
    ],
    client: {
        email: "juanguti@gmail.com",
        phone: "+573018879988",
        address: "Calle 40# 66b - 12",
        city: "Medellin"
    }
 }