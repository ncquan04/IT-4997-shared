import { Contacts } from "../contacts";

const STATUS_ORDER = Contacts.Status.Order;

export interface IProductItem {
    productId: string;
    variantId: string;
    variantName: string;
    image: string;
    title: string;
    description: string;
    price: number;
    costPrice: number;
    quantity: number;
    discount: number;
    totalMoney: number;
    imeiOrSerial?: string;
}

export interface IOrderStatusHistory {
    status: number;
    changedBy: string;
    changedAt: Date;
    note?: string;
}

export interface IOrderImeiAssignment {
    productId: string;
    variantId: string;
    branchId: string;
    imeiList: string[];
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
    branchId?: string;
    statusHistory?: IOrderStatusHistory[];
    imeiAssignments?: IOrderImeiAssignment[];
}
