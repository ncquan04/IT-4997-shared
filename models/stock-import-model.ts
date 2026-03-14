import { Contacts } from "../contacts";

const STATUS_STOCK = Contacts.Status.Stock;

export interface IStockImportItem {
    productId: string;
    variantId: string;
    quantity: number;
    unitCost: number;
    imeiList?: string[];
}

export interface IStockImport {
    _id: string;
    branchId: string;
    items: IStockImportItem[];
    supplierId: string;
    createdBy: string;
    note: string;
    status: (typeof STATUS_STOCK)[keyof typeof STATUS_STOCK];
    totalCost: number;
}
