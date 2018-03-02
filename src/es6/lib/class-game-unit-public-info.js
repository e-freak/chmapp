/**
 * 公開されている卓の情報を統括するクラス
 */
export default class {
    constructor() {
        this.currentGameProgress = 0; /* 0:東1局〜15:北4局 */
        this.doraCount; /* 開いているドラ（日本麻雀用） */
        this.winningStreakCount; /* 連荘数（日本麻雀用） */
        this.winningStreakPlayer; /* 連荘しているプレイヤー（日本麻雀用） */
    }
}