import { Order } from "../../src/Interfaces/Order";

const orderMockMoreThanTenUnitsOfSameProduct: Order = {
	orderId: "A92B-01",
	products: [{
		productId: 1,
		categoryId: 6,
		unitPrice: 60000,
		quantity: 2
	},
	{
		productId: 2,
		categoryId: 6,
		unitPrice: 50000,
		quantity: 11
	}

	],
	client: {
		email: "alguien@gmail.com",
		phone: "123456789",
		address: "Calle 20 # 100-15",
		city: "Medellin"
	}
}
const orderMockLessThanElevenUnitsOfSameProduct: Order = {
	orderId: "A92B-01",
	products: [{
		productId: 3,
		categoryId: 6,
		unitPrice: 70000,
		quantity: 1
	},
	{
		productId: 4,
		categoryId: 6,
		unitPrice: 20000,
		quantity: 10
	}

	],
	client: {
		email: "alguien@gmail.com",
		phone: "123456789",
		address: "Calle 20 # 100-15",
		city: "Medellin"
	}
}

export {
	orderMockMoreThanTenUnitsOfSameProduct,
	orderMockLessThanElevenUnitsOfSameProduct
}