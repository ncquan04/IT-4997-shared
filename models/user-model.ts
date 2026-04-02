import { MemberTier } from "./member-tier-config-model";

export const UserRole = {
    USER: "USER",
    ADMIN: "ADMIN",
    MANAGER: "MANAGER",
    WAREHOUSE: "WAREHOUSE",
    SALES: "SALES",
    TECHNICIAN: "TECHNICIAN",
} as const;

export type UserRole = (typeof UserRole)[keyof typeof UserRole];

export interface IUser {
    _id: string;
    role: UserRole;
    userName: string;
    password: string;
    email: string;
    phoneNumber: string;
    address: string[];
    dateOfBirth: number; //timestamp
    verifyCode: string;
    branchId?: string;
    // ── Loyalty ──────────────────────────────────────
    memberTier: MemberTier;
    /** Số điểm khả dụng (chưa hết hạn, chưa dùng) */
    loyaltyPoints: number;
    /** Tổng chi tiêu tích lũy toàn thời gian (VND) */
    totalSpent: number;
    /** Chi tiêu trong kỳ rolling 6 tháng hiện tại (VND) */
    spentInWindow: number;
    /** Timestamp bắt đầu kỳ rolling hiện tại */
    windowStartAt: number;
}

export class User implements IUser {
    _id: string;
    role: UserRole;
    userName: string;
    password: string;
    email: string;
    phoneNumber: string;
    address: string[];
    dateOfBirth: number;
    verifyCode: string;
    branchId?: string;
    memberTier: MemberTier;
    loyaltyPoints: number;
    totalSpent: number;
    spentInWindow: number;
    windowStartAt: number;

    constructor(obj: Partial<IUser> = {}) {
        const {
            _id = "",
            role = UserRole.USER,
            userName = "",
            password = "",
            email = "",
            phoneNumber = "",
            address = [],
            dateOfBirth = Date.now(),
            verifyCode = "",
            branchId,
            memberTier = MemberTier.S_NEW,
            loyaltyPoints = 0,
            totalSpent = 0,
            spentInWindow = 0,
            windowStartAt = Date.now(),
        } = obj;

        this._id = _id;
        this.role = role;
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.dateOfBirth = new Date(dateOfBirth).getTime();
        this.verifyCode = verifyCode;
        this.branchId = branchId;
        this.memberTier = memberTier;
        this.loyaltyPoints = loyaltyPoints;
        this.totalSpent = totalSpent;
        this.spentInWindow = spentInWindow;
        this.windowStartAt = windowStartAt;
    }
}
