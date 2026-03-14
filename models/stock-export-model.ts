import { Contacts } from "../contacts";

const STATUS_STOCK = Contacts.Status.Stock;
const EXPORT_REASON = Contacts.ExportReason;

export interface IStockExportItem {
    productId: string;
    variantId: string;
    quantity: number;
    imeiList?: string[];
}

export interface IStockExport {
    _id: string;
    branchId: string;
    items: IStockExportItem[];
    reason: (typeof EXPORT_REASON)[keyof typeof EXPORT_REASON];
    orderId?: string;
    createdBy: string;
    note: string;
    status: (typeof STATUS_STOCK)[keyof typeof STATUS_STOCK];
}
