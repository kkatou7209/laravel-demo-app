/**
 * 通知データモデル
 */
export default class NotificationModel {
    /** 通知ID */
    id: number = 0;
    /** 通知タイトル */
    title: string = "";
    /** 通知本文 */
    message: string = "";
    /** 通知日時 */
    notifiedDate: Date | null = null;
}
