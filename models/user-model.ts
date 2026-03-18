export const UserRole = {
  USER: "USER",
  ADMIN: "ADMIN",
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
  }
}
