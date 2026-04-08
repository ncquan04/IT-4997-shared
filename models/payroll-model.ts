export const PayrollStatus = {
  DRAFT: "DRAFT",
  CONFIRMED: "CONFIRMED",
  PAID: "PAID",
} as const;

export type PayrollStatus = (typeof PayrollStatus)[keyof typeof PayrollStatus];

export interface IPayroll {
  _id: string;
  employeeId: string;
  branchId: string;
  month: number;
  year: number;
  standardDays: number;
  workingDays: number;
  leaveDays: number;
  baseSalary: number;
  allowances: number;
  deductions: number;
  actualSalary: number;
  status: PayrollStatus;
  note?: string;
  confirmedBy?: string;
}
