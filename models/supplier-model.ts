export interface ISupplier {
    _id: string;
    name: string;
    contactPerson: string;
    phone: string;
    email: string;
    address: string;
}

export class Supplier implements ISupplier {
    _id: string;
    name: string;
    contactPerson: string;
    phone: string;
    email: string;
    address: string;

    constructor(obj: Partial<ISupplier> = {}) {
        const { _id = "", name = "", contactPerson = "", phone = "", email = "", address = "" } = obj;
        this._id = _id;
        this.name = name;
        this.contactPerson = contactPerson;
        this.phone = phone;
        this.email = email;
        this.address = address;
    }
}
