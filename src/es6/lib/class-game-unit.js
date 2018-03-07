/**
 * ゲーム1セットのクラス
 * これを継承して日本麻雀、中国麻雀のクラスを作る
 */
export default class {
    constructor() {
        this.public = this._createPublicInfo();
        this.wall = this._createWall();
        this.self = this._createSelfPlayer();
        this.right = this._createRightPlayer();
        this.opposite = this._createOppositePlayer();
        this.left = this._createLeftPlayer();

        this._state; /* 状態 */
    }

    _createPublicInfo() {
        throw new Error('No public info creation logic.');
    }

    _createWall() {
        throw new Error('No wall creation logic.');
    }

    _createSelfPlayer() {
        throw new Error('No self-player creation logic.');
    }

    _createRightPlayer() {
        throw new Error('No right-player creation logic.');
    }

    _createOppositePlayer() {
        throw new Error('No opposite-player creation logic.');
    }

    _createLeftPlayer() {
        throw new Error('No left-player creation logic.');
    }

    startRound() {
        throw new Error('No startRound logic.');
    }

    letPlayerDiscard() {
        throw new Error('No letPlayerDiscard logic.');
    }

    letPlayerDraw() {
        throw new Error('No letPlayerDraw logic.');
    }
}