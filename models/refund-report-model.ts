
export interface IRefundReport {
    _id: string;
    orderId: string;
    paymentId: string;
    customerDetail: {
        name: string;
        email: string;
        phone: string;
    }
    refundBy: string;
    reason: string;
    amount: number;
    images: string[];
}

export class RefundReportModel implements IRefundReport {
    _id: string;
    orderId: string;
    paymentId: string;
    customerDetail: {
        name: string;
        email: string;
        phone: string;
    };
    refundBy: string;
    reason: string;
    amount: number;
    images: string[];

    constructor(data: Partial<IRefundReport> = {}) {
        this._id = data._id || '';
        this.orderId = data.orderId || '';
        this.paymentId = data.paymentId || '';
        this.reason = data.reason || '';
        this.customerDetail = data.customerDetail || { name: '', email: '', phone: '' };
        this.refundBy = data.refundBy || '';
        this.amount = data.amount || 0;
        this.images = data.images || [];
    }
}