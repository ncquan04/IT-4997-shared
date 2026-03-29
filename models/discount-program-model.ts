export type DiscountProgramType = "percent" | "fixed";
export type DiscountProgramScope = "product" | "category" | "all";

export interface IDiscountProgram {
  _id: string;
  name: string;
  type: DiscountProgramType;
  value: number;
  maxDiscount: number; // 0 = no cap (only for percent type)
  scope: DiscountProgramScope;
  applicableIds: string[]; // productIds or categoryIds; empty if scope = "all"
  startAt: number; // timestamp ms
  endAt: number; // timestamp ms
  isActive: boolean;
}
