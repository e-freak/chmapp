/**
 * プレイヤークラス
 */
export default class {
    constructor() {
        this.score = 0;
        this.timeLimit = 0; /* 操作時間猶予（秒） */
        this.timeLimitExtra = 0; /* 持ち時間（秒） */
        this.hand; /* 手牌（ツモ牌は含まない） */
        this.drawTile; /* ツモ牌 */
    }
}