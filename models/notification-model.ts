export type NotificationTye = "ORDER" | "PRODUCT" | "PAYMENT";

export interface INotification {
    _id: string;
    notificationType: string;
    title: string;
    message: string;
    referenceId: string;
    userId: string;
    readBy: string[];
    createdAt?: any;
}

export class Notification implements INotification {
    _id: string;
    notificationType: string;
    title: string;
    message: string;
    referenceId: string;
    userId: string;
    readBy: string[];

    constructor(obj: Partial<INotification> = {}) {
        const {
            _id = "",
            notificationType = "",
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
