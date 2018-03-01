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

    _createSelfPlayerInfo() {
        throw new Error("No self-player creation logic.");
    }

    _createRightPlayerInfo() {
        throw new Error("No right-player creation logic.");
    }

    _createOppositePlayerInfo() {
        throw new Error("No opposite-player creation logic.");
    }

    _createLeftPlayerInfo() {
        throw new Error("No left-player creation logic.");
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
