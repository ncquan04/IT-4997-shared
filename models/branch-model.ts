export interface IBranchManager {
  _id: string;
  userName: string;
  email: string;
}

export interface IRentCostEntry {
  amount: number;
  effectiveFrom: string; // ISO date string
  note?: string;
}

export interface IBranch {
  _id: string;
  name: string;
  address: string;
  phone: string;
  managerId: string;
  isActive: boolean;
  rentCost?: number;
  rentCostHistory?: IRentCostEntry[];
}

export interface IBranchPopulated extends Omit<IBranch, "managerId"> {
  managerId: IBranchManager | null;
}

export class Branch implements IBranch {
  _id: string;
  name: string;
  address: string;
  phone: string;
  managerId: string;
  isActive: boolean;
  rentCost?: number;

  constructor(obj: Partial<IBranch> = {}) {
    const {
      _id = "",
      name = "",
      address = "",
      phone = "",
      managerId = "",
      isActive = true,
      rentCost,
    } = obj;
    this._id = _id;
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.managerId = managerId;
    this.isActive = isActive;
    this.rentCost = rentCost;
  }
}
