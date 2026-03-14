export interface IBranchInventory {
    _id: string;
    branchId: string;
    productId: string;
    variantId: string;
    quantity: number;
    imeiList?: string[];
}
