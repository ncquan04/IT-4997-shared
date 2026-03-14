export type NotificationType = "ORDER" | "PRODUCT" | "PAYMENT" | "WARRANTY" | "STOCK";

export interface INotification {
    _id: string;
    notificationType: NotificationType;
    title: string;
    message: string;
    referenceId: string;
    userId: string;
    readBy: string[];
    createdAt?: any;
}

export class Notification implements INotification {
    _id: string;
    notificationType: NotificationType;
    title: string;
    message: string;
    referenceId: string;
    userId: string;
    readBy: string[];

    constructor(obj: Partial<INotification> = {}) {
        const {
            _id = "",
            notificationType = "ORDER",
            title = "",
            message = "",
            referenceId = "",
            userId = "",
            readBy = [],
        } = obj;
        this._id = _id;
        this.notificationType = notificationType;
        this.title = title;
        this.message = message;
        this.referenceId = referenceId;
        this.userId = userId;
        this.readBy = readBy;
    }
}
