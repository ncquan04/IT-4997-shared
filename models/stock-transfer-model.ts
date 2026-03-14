import { Contacts } from "../contacts";

const STATUS_TRANSFER = Contacts.Status.Transfer;

export interface IStockTransferItem {
    productId: string;
    variantId: string;
    quantity: number;
    imeiList?: string[];
}

export interface IStockTransfer {
    _id: string;
    fromBranchId: string;
    toBranchId: string;
    items: IStockTransferItem[];
    status: (typeof STATUS_TRANSFER)[keyof typeof STATUS_TRANSFER];
    createdBy: string;
    approvedBy?: string;
    note: string;
}
