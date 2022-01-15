import { Product } from './Product';
import { Client } from './Client';
import { paymentMethodEnum } from '../enums/PaymentMethods';

export interface Order {
    orderId: string;
    products: Product[];
    client: Client;
    paymentMethod?: paymentMethodEnum
}