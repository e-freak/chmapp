/**
 * 中国麻雀一荘のクラス
 */
import {
    default as GameUnit
} from './class-game-unit';
import {
    default as PublicInfo
} from './class-game-unit-public-info';
import {
    default as Wall
} from './class-game-unit-wall';
import {
    default as Player
} from './class-game-unit-player';

export default class extends GameUnit {
    constructor() {
        super(); /* このクラスで定義した_create系メソッドが呼ばれる */
    }

    _createPublicInfo() {
        return new PublicInfoWMC();
    }

    _createWall() {
        return new WallWMC();
    }

    _createSelfPlayer() {
        const player = new Player();
        player.timeLimit = 10; /* 操作時間猶予（秒） */
        player.timeLimitExtra = 120; /* 持ち時間（秒） */
        return player;
    }

    _createRightPlayer() {
        return this._createSelfPlayer();
    }

    _createOppositePlayer() {
        return this._createSelfPlayer();
    }

    _createLeftPlayer() {
        return this._createSelfPlayer();
    }

    startGame() {
        throw new Error("No startGame logic.");
    }
}

class PublicInfoWMC extends PublicInfo {
    constructor() {
        super();
    }
}

class WallWMC extends Wall {
    constructor() {
        super();
    }

    _createLiveWall() {
        /* 全ての牌セットを結合してシャッフルする */
        return [...this._TileSetCommon, ...this._TileSetFlower].map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
    }

    _createDeadWall() {
        /* 中国麻雀では王牌は使用しない */
        return undefined;
    }
}
