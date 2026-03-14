import { Contacts } from "../contacts";
const STATUS_EVALUATION = Contacts.Status.Evaluation;

export interface ISpecItem {
  key: string;
  value: string;
  numericValue?: number;
  unit?: string;
}

export interface IProductVariant {
    _id: string;
    variantName: string;
    attributes: ISpecItem[];
    images: string[];
    price: number;
    salePrice?: number;
    costPrice: number;
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
    rating?: number;
    warrantyPeriod?: number;
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
    rating?: number;
    warrantyPeriod?: number;

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
            rating,
            warrantyPeriod,
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
        this.rating = rating;
        this.warrantyPeriod = warrantyPeriod;
    }
}
