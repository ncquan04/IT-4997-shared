export interface IBranch {
    _id: string;
    name: string;
    address: string;
    phone: string;
    managerId: string;
    isActive: boolean;
}

export class Branch implements IBranch {
    _id: string;
    name: string;
    address: string;
    phone: string;
    managerId: string;
    isActive: boolean;

    constructor(obj: Partial<IBranch> = {}) {
        const { _id = "", name = "", address = "", phone = "", managerId = "", isActive = true } = obj;
        this._id = _id;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.managerId = managerId;
        this.isActive = isActive;
    }
}
