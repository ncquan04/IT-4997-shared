export const MemberTier = {
    S_NEW: "S_NEW",
    S_MEM: "S_MEM",
    S_CLASS: "S_CLASS",
} as const;

export type MemberTier = (typeof MemberTier)[keyof typeof MemberTier];

export interface IMemberTierConfig {
    _id: string;
    tier: MemberTier;
    /** Tổng chi tiêu tối thiểu trong kỳ (VND) để đạt / giữ hạng */
    minSpent: number;
    /** % chiết khấu thêm khi thanh toán */
    discountPercent: number;
    isActive: boolean;
}
