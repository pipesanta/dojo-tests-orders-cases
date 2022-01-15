import { paymentMethodEnum } from "../../src/enums/PaymentMethods";
import { Order } from "../../src/Interfaces/Order";

const orderMockOneProduct: Order = {
    orderId: "A92B-01",
    products: [{
        productId: 1,
        categoryId: 6,
        unitPrice: 112000,
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

const orderMockTwoProductsGreaterThan100k: Order = {
    orderId: "A92B-01",
    products: [{
        productId: 1,
        categoryId: 6,
        unitPrice: 90000,
        quantity: 1
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
    }, {
        productId: 1,
        categoryId: 6,
        unitPrice: 90000,
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

const orderMockTwoProductsLessOrEqualThan100k: Order = {
    orderId: "A92B-01",
    products: [{
        productId: 1,
        categoryId: 6,
        unitPrice: 40000,
        quantity: 1
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


export const orderMockPaidWithGiftCard: Order = {
    orderId: "A92B-01",
    paymentMethod: paymentMethodEnum.GIFT_CARD,
    products: [
        {
            productId: 1,
            categoryId: 6,
            unitPrice: 4000,
            quantity: 1
        },
        {
            productId: 1,
            categoryId: 6,
            unitPrice: 10000,
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

export const orderMockPaidWithGiftCardGreaterThan250K: Order = {
    orderId: "A92B-01",
    paymentMethod: paymentMethodEnum.GIFT_CARD,
    products: [
        {
            productId: 1,
            categoryId: 6,
            unitPrice: 420000,
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

export const orderMockPaidWithCreditCard: Order = {

    orderId: "A92B-01",
    paymentMethod: paymentMethodEnum.CREDIT_CARD,
    products: [
        {
            productId: 1,
            categoryId: 6,
            unitPrice: 10000,
            quantity: 1
        },
        {
            productId: 1,
            categoryId: 6,
            unitPrice: 5000,
            quantity: 3
        }
    ],
    client: {
        email: "juanguti@gmail.com",
        phone: "+573018879988",
        address: "Calle 40# 66b - 12",
        city: "Medellin"
    }
}

export const orderMockPaidWithCash: Order = {
    orderId: "A92B-01",
    paymentMethod: paymentMethodEnum.CASH,
    products: [
        {
            productId: 1,
            categoryId: 6,
            unitPrice: 35000,
            quantity: 2
        },
        {
            productId: 1,
            categoryId: 6,
            unitPrice: 500,
            quantity: 1
        }
    ],
    client: {
        email: "juansantag95@gmail.com",
        phone: "+573125210012",
        address: "Calle 40# 66b - 12",
        city: "Medellin"
    }
}

export {
    orderMockOneProduct,
    orderMockTwoProductsGreaterThan100k,
    orderMockTwoProductsGreaterThan100kDiffSort,
    orderMockTwoProductsLessOrEqualThan100k
}