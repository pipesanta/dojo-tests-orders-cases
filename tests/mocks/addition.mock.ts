import { Order } from "../../src/Interfaces/Order";

const orderMock200k: Order = {
    orderId: "A92B-01",
    products: [{
        productId: 1,
        categoryId: 6,
        unitPrice: 80000,
        quantity: 2
    },
    {
        productId: 1,
        categoryId: 6,
        unitPrice: 60000,
        quantity: 1
    }
    ],
    client: {
        email: "juanguti@gmail.com",
        phone: "+573018879988",
        address: "Calle 40# 66b - 12",
        city: "Medellin"
    }
}

const orderMock100k: Order = {
    orderId: "A92B-01",
    products: [{
        productId: 1,
        categoryId: 6,
        unitPrice: 40000,
        quantity: 2
    },
    {
        productId: 1,
        categoryId: 6,
        unitPrice: 20100,
        quantity: 1
    }
    ],
    client: {
        email: "juanguti@gmail.com",
        phone: "+573018879988",
        address: "Calle 40# 66b - 12",
        city: "Medellin"
    }
 }

 export {
    orderMock200k,
    orderMock100k
}