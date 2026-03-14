import { Contacts } from "../contacts";

const PAYMENT_METHOD = Contacts.PaymentMethod;
const DELIVERY = Contacts.Delivery;
const STATUS_PAYMENT = Contacts.Status.Payment;
export interface IPayment {
    _id: string;
    userId: string;
    orderId: string;
    method: (typeof PAYMENT_METHOD)[keyof typeof PAYMENT_METHOD];
    totalMoney: number;
    discount: number;
    delivery: (typeof DELIVERY)[keyof typeof DELIVERY];
    status: (typeof STATUS_PAYMENT)[keyof typeof STATUS_PAYMENT];
}
