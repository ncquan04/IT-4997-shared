export interface ICategory {
    _id: string;
    name: string;
}

export class Category implements ICategory {
    _id: string;
    name: string;
    constructor(obj: Partial<ICategory> = {}) {
        const { _id = "", name = "" } = obj;
        this._id = _id;
        this.name = name;
    }
}
