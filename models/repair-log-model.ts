export interface IRepairLog {
    _id: string;
    warrantyRequestId: string;
    imeiOrSerial: string;
    action: string;
    replacedParts?: string[];
    cost: number;
    technicianId: string;
    note: string;
}
