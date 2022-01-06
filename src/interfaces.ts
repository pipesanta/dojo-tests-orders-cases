export interface Order {
    orderId:  string;
    products: Product[];
    client:   Client;
}

export interface Client {
    email:   string;
    phone:   string;
    address: string;
    city:    string;
}

export interface Product {
    productId:  number;
    categoryId: number;
    unitPrice:  number;
    quantity:   number;
}