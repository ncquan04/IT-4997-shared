import { Contacts } from "../contacts";

const RATE = Contacts.Rate;
const STATUS_EVALUATION = Contacts.Status.Evaluation;

export interface IEvaluation {
    _id: string;
    userId: string;
    productId: string;
    parentEvaluationId: string;
    content: string[];
    imageUrlFeedback: string[];
    rate: (typeof RATE)[keyof typeof RATE];
    isHide: (typeof STATUS_EVALUATION)[keyof typeof STATUS_EVALUATION];
}

export class Evaluation implements IEvaluation {
    _id: string;
    userId: string;
    productId: string;
    parentEvaluationId: string;
    content: string[];
    rate: (typeof RATE)[keyof typeof RATE];
    isHide: (typeof STATUS_EVALUATION)[keyof typeof STATUS_EVALUATION];
    imageUrlFeedback: string[];
    constructor(obj: Partial<IEvaluation> = {}) {
        const {
            _id = "",
            userId = "",
            productId = "",
            parentEvaluationId = "",
            content = [],
            rate = RATE.FIVE,
            isHide = STATUS_EVALUATION.HIDE,
            imageUrlFeedback = [],
        } = obj;
        this._id = _id;
        this.userId = userId;
        this.productId = productId;
        this.parentEvaluationId = parentEvaluationId;
        this.content = content;
        this.rate = rate;
        this.isHide = isHide;
        this.imageUrlFeedback = imageUrlFeedback;
    }
}
