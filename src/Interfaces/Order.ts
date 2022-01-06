import { Product } from './Product';
import { Client } from './Client';

export interface Order {
    orderId:  string;
    products: Product[];
    client:   Client;
}