import { Contacts } from "../contacts";

const STATUS_WARRANTY = Contacts.Status.Warranty;

export interface IWarrantyRequest {
    _id: string;
    customerId: string;
    orderId: string;
    productId: string;
    variantId: string;
    branchId: string;
    imeiOrSerial: string;
    issueDescription: string;
    physicalCondition: string;
    images: string[];
    status: (typeof STATUS_WARRANTY)[keyof typeof STATUS_WARRANTY];
    receivedBy: string;
    estimatedDate?: number;
    completedDate?: number;
}
