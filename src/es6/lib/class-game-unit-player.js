/**
 * プレイヤークラス
 */
export default class {
    constructor() {
        this.score = 0; /* 持ち点 */
        this.timeLimit = 0; /* 操作時間猶予（秒） */
        this.timeLimitExtra = 0; /* 持ち時間（秒） */
        this.drawTile; /* ツモ牌 */
        this.hand = []; /* 手牌（ツモ牌は含まない） */
        this.melds = []; /* 副露面子 */
        this.flowers = []; /* 花牌 */
    }
}