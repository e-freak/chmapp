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
import {
    default as Tile
} from './class-tile';

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
        player.score = 0;
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
        this.public = this._createPublicInfo();
        this.wall = this._createWall();
        this.self = this._createSelfPlayer();
        this.right = this._createRightPlayer();
        this.opposite = this._createOppositePlayer();
        this.left = this._createLeftPlayer();

        // 各プレイヤーの手牌とプレイヤー自身のツモ牌
        this.self.hand = this.wall.liveWall.splice(0, 13).sort(Tile.sortTiles);
        this.right.hand = this.wall.liveWall.splice(0, 13).sort(Tile.sortTiles);
        this.opposite.hand = this.wall.liveWall.splice(0, 13).sort(Tile.sortTiles);
        this.left.hand = this.wall.liveWall.splice(0, 13).sort(Tile.sortTiles);
        this.self.drawTile = this.wall.liveWall.splice(0, 1)[0];

        // 各プレイヤーの花牌
        for (let value of Array(8)) {
            if (this.self.hand[this.self.hand.length-1].suit === 'flower') {
                this.self.flowers.push(this.self.hand.pop());
                this.self.hand = [...this.self.hand, ...this.wall.liveWall.splice(0, 1)].sort(Tile.sortTiles);
            }
        }
        this.self.flowers = this.self.flowers.sort(Tile.sortTiles);
        for (let value of Array(8)) {
            if (this.right.hand[this.right.hand.length-1].suit === 'flower') {
                this.right.flowers.push(this.right.hand.pop());
                this.right.hand = [...this.right.hand, ...this.wall.liveWall.splice(0, 1)].sort(Tile.sortTiles);
            }
        }
        this.right.flowers = this.right.flowers.sort(Tile.sortTiles);
        for (let value of Array(8)) {
            if (this.opposite.hand[this.opposite.hand.length-1].suit === 'flower') {
                this.opposite.flowers.push(this.opposite.hand.pop());
                this.opposite.hand = [...this.opposite.hand, ...this.wall.liveWall.splice(0, 1)].sort(Tile.sortTiles);
            }
        }
        this.opposite.flowers = this.opposite.flowers.sort(Tile.sortTiles);
        for (let value of Array(8)) {
            if (this.left.hand[this.left.hand.length-1].suit === 'flower') {
                this.left.flowers.push(this.left.hand.pop());
                this.left.hand = [...this.left.hand, ...this.wall.liveWall.splice(0, 1)].sort(Tile.sortTiles);
            }
        }
        this.left.flowers = this.left.flowers.sort(Tile.sortTiles);
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
        return [...this._TileSetCommon, ...this._TileSetFlower].map((a) => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map((a) => a[1]);
    }

    _createDeadWall() {
        /* 中国麻雀では王牌は使用しない */
        return undefined;
    }
}