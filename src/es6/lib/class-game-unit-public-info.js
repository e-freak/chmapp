/**
 * ゲーム1セットのクラス
 * これを継承して日本麻雀、中国麻雀のクラスを作る
 */
export default class {
    constructor() {
        this.currentGameProgress = 0; /* 0:東1局〜15:北4局 */
        this.winningStreak = 0; /* 連荘（日本麻雀用） */
        this.doraCount = 0; /* 開いているドラ（日本麻雀用） */
    }
}