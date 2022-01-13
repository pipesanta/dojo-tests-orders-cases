import { Order } from "../../src/Interfaces/Order";

const orderMockOneProduct: Order = {
    orderId: "A92B-01",
    products: [{
        productId: 1,
        categoryId: 6,
        unitPrice: 60000,
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

const orderMockTwoProductsGreaterThan100k: Order = {
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

 

 const orderMockTwoProductsGreaterThan100kDiffSort: Order = {
    orderId: "A92B-01",
    products: [{
        productId: 1,
        categoryId: 6,
        unitPrice: 20100,
        quantity: 1
    },{
        productId: 1,
        categoryId: 6,
        unitPrice: 40000,
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

 const orderMockTwoProductsLessOrEqualThan100k: Order = {
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
        unitPrice: 19000,
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

 const applianceDiscountOrder: Order = {
    orderId: "REFRI-123",
    products: [{
        productId: 111,
        categoryId: 888,
        unitPrice: 800800,
        quantity: 1
    },
    {
        productId: 2222,
        categoryId: 888,
        unitPrice: 15454,
        quantity: 1
    },
    {
        productId: 333,
        categoryId: 777,
        unitPrice: 808080,
        quantity: 1
    }
    ],
    client: {
        email: "juangallo@gmail.com",
        phone: "+576666666",
        address: "666666666",
        city: "To hell and back"
    }
 }

 const applianceNotDiscountOrder: Order = {
    orderId: "AYJOAYJOAYJO",
    products: [{
        productId: 111,
        categoryId: 888,
        unitPrice: 800800,
        quantity: 1
    }],
    client: {
        email: "juangallo@gmail.com",
        phone: "+576666666",
        address: "666666666",
        city: "To hell and back"
    }
 }
 

export {
    orderMockOneProduct,
    orderMockTwoProductsGreaterThan100k,
    orderMockTwoProductsGreaterThan100kDiffSort,
    orderMockTwoProductsLessOrEqualThan100k,
    applianceDiscountOrder,
    applianceNotDiscountOrder
}