export const AttendanceStatus = {
  PRESENT: "PRESENT",
  ABSENT: "ABSENT",
  LATE: "LATE",
  HALF_DAY: "HALF_DAY",
  LEAVE: "LEAVE",
} as const;

export type AttendanceStatus =
  (typeof AttendanceStatus)[keyof typeof AttendanceStatus];

export interface IAttendance {
  _id: string;
  employeeId: string;
  branchId: string;
  /** YYYY-MM-DD */
  date: string;
  checkInTime?: number;
  checkOutTime?: number;
  status: AttendanceStatus;
  workingHours?: number;
  note?: string;
  reviewedBy?: string;
}
