export type CouponType = "percent" | "fixed";

export interface ICoupon {
  _id: string;
  code: string;
  type: CouponType;
  value: number;
  minOrderValue: number;
  maxDiscount: number; // 0 = no cap (only relevant for percent type)
  maxUsage: number; // 0 = unlimited
  usedCount: number;
  expiredAt: number; // timestamp (ms)
  isActive: boolean;
  applicableProducts: string[]; // empty = applies to entire order
}
