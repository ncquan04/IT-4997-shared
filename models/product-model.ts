import { Contacts } from "../contacts";
const STATUS_EVALUATION = Contacts.Status.Evaluation;

export interface ISpecItem {
  key: string; 
  value: string; 
}

export interface IProductVariant{
    _id: string;
    version: string;
    colorName: string;
    hexcode: string;
    images: string[];
    quantity: number;
    price: number;
    salePrice?: number;
    sku: string;
}
export interface IProduct {
    _id: string;
    title: string;
    brand: string;
    description: string;
    descriptionDetail: string;
    specifications: ISpecItem[];
    variants: IProductVariant[];
    categoryId: string;
    isHide: (typeof STATUS_EVALUATION)[keyof typeof STATUS_EVALUATION];
    // imageUrl: string[];
    rating?: number;
}

export class Product implements IProduct {
    _id: string;
    title: string;
    brand: string;
    description: string;
    descriptionDetail: string;
    specifications: ISpecItem[];
    variants: IProductVariant[];
    categoryId: string;
    isHide: (typeof STATUS_EVALUATION)[keyof typeof STATUS_EVALUATION];
    // imageUrl: string[];
    rating?: number;
    constructor(obj: Partial<IProduct> = {}) {
        const {
            _id = "",
            title = "",
            brand = "",
            description = "",
            descriptionDetail = "",
            specifications = [],
            variants = [],
            categoryId = "",
            isHide = STATUS_EVALUATION.HIDE,
            // imageUrl = [],
            rating,
        } = obj;
        this._id = _id;
        this.title = title;
        this.brand = brand;
        this.description = description;
        this.descriptionDetail = descriptionDetail;
        this.specifications = specifications;
        this.variants = variants;
        this.categoryId = categoryId;
        this.isHide = isHide;
        // this.imageUrl = imageUrl;
        this.rating = rating;
    }
}
