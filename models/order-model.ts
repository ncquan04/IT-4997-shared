import { Contacts } from "../contacts";

const STATUS_ORDER = Contacts.Status.Order;
export interface IProductItem {
    productId: string;
    variantId: string;
    title: string;
    description: string;
    price: number;
    quantity: number;
    discount: number;
    totalMoney: number;
}

export interface IOrder {
    _id: string;
    listProduct: IProductItem[];
    userId: string;
    sumPrice: number;
    note: string;
    toAddress: string;
    numberPhone?: string;
    userName?: string;
    statusOrder: (typeof STATUS_ORDER)[keyof typeof STATUS_ORDER];
}
