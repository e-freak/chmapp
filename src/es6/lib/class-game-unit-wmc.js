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

    startRound() {
        this.public = this._createPublicInfo();
        this.wall = this._createWall();
        this.self = this._createSelfPlayer();
        this.right = this._createRightPlayer();
        this.opposite = this._createOppositePlayer();
        this.left = this._createLeftPlayer();

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

        // 各プレイヤーの花牌を理牌
        [this.self, this.right, this.opposite, this.left].forEach((player) => {
            [...Array(8)].forEach(() => { // 花牌は最多でも8枚
                if (player.hand[player.hand.length - 1].suit === 'flower') {
                    player.flowers.push(player.hand.pop());
                    player.hand = [...player.hand, ...this.wall.liveWall.splice(0, 1)].sort(Tile.sortTiles);
                }
                player.flowers = player.flowers.sort(Tile.sortTiles);
            });
        });

        // 自家のツモ牌が花牌なら追加ドロー
        // [...Array(8)].forEach(() => { // 花牌は最多でも8枚
        //     if (this.self.drawTile.suit === 'flower') {
        //         this.self.flowers.push(this.self.drawTile);
        //         this.self.flowers = this.self.flowers.sort(Tile.sortTiles);
        //         this.self.drawTile = this.wall.liveWall.splice(0, 1)[0];
        //     }
        // });
    }

    letPlayerDiscard(player, tileKey) {
        const TILE_TO_DISCARD = {
            'draw': player.drawTile,
            'hand1': player.hand[0],
            'hand2': player.hand[1],
            'hand3': player.hand[2],
            'hand4': player.hand[3],
            'hand5': player.hand[4],
            'hand6': player.hand[5],
            'hand7': player.hand[6],
            'hand8': player.hand[7],
            'hand9': player.hand[8],
            'hand10': player.hand[9],
            'hand11': player.hand[10],
            'hand12': player.hand[11],
            'hand13': player.hand[12]
        }
        player.discards.push(TILE_TO_DISCARD[tileKey]);
        if (tileKey !== 'draw') {
            TILE_TO_DISCARD[tileKey] = player.drawTile;
            player.hand = player.hand.sort(Tile.sortTiles);
        }
        player.drawTile = undefined;
    }

    letPlayerDraw(player) {
        player.drawTile = this.wall.liveWall.splice(0, 1)[0];
        // ツモ牌が花牌なら追加ドロー
        const EXPOSED_FLOWERS_COUNT = this.self.flowers.length + this.right.flowers.length + this.opposite.flowers.length + this.left.flowers.length;
        [...Array(8 - EXPOSED_FLOWERS_COUNT)].forEach(() => { // 見えていない花牌の回数分ループ
            if (player.drawTile.suit === 'flower') {
                player.flowers.push(player.drawTile);
                player.flowers = player.flowers.sort(Tile.sortTiles);
                player.drawTile = this.wall.liveWall.splice(0, 1)[0];
            }
        });
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