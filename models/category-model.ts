export interface ICategory {
    _id: string;
    name: string;
    description?: string;
    imageUrl?: string;
    parentCategoryId?: string;
}

export class Category implements ICategory {
    _id: string;
    name: string;
    description?: string;
    imageUrl?: string;
    parentCategoryId?: string;

    constructor(obj: Partial<ICategory> = {}) {
        const { _id = "", name = "", description, imageUrl, parentCategoryId } = obj;
        this._id = _id;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.parentCategoryId = parentCategoryId;
    }
}
