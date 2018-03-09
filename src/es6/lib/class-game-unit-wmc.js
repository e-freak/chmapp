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
        this.currentPlayer = undefined;
    }

    goNextRound() {
        // 各プレイヤーの手牌13枚をセットして理牌
        [4, 4, 4, 1].forEach((tileCount) => {
            [this.self, this.right, this.opposite, this.left].forEach((player) => {
                player.hand = [...player.hand, ...this.wall.liveWall.splice(0, tileCount)]
            })
        });
        [this.self, this.right, this.opposite, this.left].forEach((player) => {
            player.hand = player.hand.sort(Tile.sortTiles);
        });
        // this.self.drawTile = this.wall.liveWall.splice(0, 1)[0];

        // 各プレイヤーの花牌をセット
        [this.self, this.right, this.opposite, this.left].forEach((player) => {
            [...Array(8)].forEach(() => { // 花牌は最多でも8枚
                if (player.hand[player.hand.length - 1].suit === 'flower') {
                    player.flowers.push(player.hand.pop());
                    player.hand = [...player.hand, ...this.wall.liveWall.splice(0, 1)].sort(Tile.sortTiles);
                }
                // player.flowers = player.flowers.sort(Tile.sortTiles);
            });
        });
    }

    goNextPlayer() {
        if (this.currentPlayer === undefined || this.currentPlayer === this.left) {
            this.currentPlayer = this.self;
        } else if (this.currentPlayer === this.self) {
            this.currentPlayer = this.right;
        } else if (this.currentPlayer === this.right) {
            this.currentPlayer = this.opposite;
        } else {
            this.currentPlayer = this.left;
        }
    }

    letPlayerDraw(player) {
        player.drawTile = this.wall.liveWall.splice(0, 1)[0];
        // ツモ牌が花牌なら追加ドロー
        const EXPOSED_FLOWERS_COUNT = this.self.flowers.length + this.right.flowers.length + this.opposite.flowers.length + this.left.flowers.length;
        [...Array(8 - EXPOSED_FLOWERS_COUNT)].forEach(() => { // 見えていない花牌の回数分ループ
            if (player.drawTile.suit === 'flower') {
                player.flowers.push(player.drawTile);
                // player.flowers = player.flowers.sort(Tile.sortTiles);
                player.drawTile = this.wall.liveWall.splice(0, 1)[0];
            }
        });
    }

    /* tileKeyに入る文字列は'draw', 'hand1', 'hand2'...'hand12', 'hand13'を想定している */
    letPlayerDiscard(player, tileKey) {
        if (tileKey === 'draw') {
            player.discards.push(player.drawTile);
        } else {
            const handIndex = Number(tileKey.replace(/hand/g, '')) - 1; // どの手牌か
            player.discards.push(player.hand[handIndex]);
            player.hand[handIndex] = player.drawTile;
            player.hand = player.hand.sort(Tile.sortTiles);
        }
        player.drawTile = undefined;
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