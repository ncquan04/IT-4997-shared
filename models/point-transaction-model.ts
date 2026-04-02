export const PointTransactionType = {
    EARN: "EARN",
    REDEEM: "REDEEM",
    EXPIRE: "EXPIRE",
} as const;

export type PointTransactionType =
    (typeof PointTransactionType)[keyof typeof PointTransactionType];

export interface IPointTransaction {
    _id: string;
    userId: string;
    type: PointTransactionType;
    /** Số điểm: dương (EARN), âm (REDEEM / EXPIRE) */
    points: number;
    orderId?: string;
    /** Chỉ có ở loại EARN — timestamp hết hạn sau 6 tháng */
    expiresAt?: number;
    /** EARN batch đã bị thu hồi (expire) chưa */
    expired?: boolean;
    note?: string;
}
