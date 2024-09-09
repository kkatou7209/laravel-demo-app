import ProductModel from "./Product";
import UserModel from "./User";

export default class SalesModel {
    /** 売掛合計額 */
    total: number = 0;
    /** 請求先 */
    billTo: UserModel | null = null;
    /** 売上商品 */
    products: ProductModel[] = [];
    /** 売掛金支払予定日 */
    willReceivedAt: Date | null = null;
    /** 支払い済かどうか */
    isReceived: boolean = false;
}
