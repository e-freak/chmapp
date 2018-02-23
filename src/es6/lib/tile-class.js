/**
 * 牌クラス
 */
import {
    TILE_ATTRIBUTE
} from './const-tile-attribute';

export default class {
    constructor(name) {
        if (!(name in TILE_ATTRIBUTE)) { /* 牌画像の連想配列のkeyを使って対応するnameかどうかを調べる */
            throw new Error("対応していない牌です。");
        }
        this.name = name;
        this.imageFile = TILE_ATTRIBUTE[name][0];
        this.suit = TILE_ATTRIBUTE[name][1];
        this.number = TILE_ATTRIBUTE[name][2];
    }

    static sortTiles(tileA, tileB) {
        const TILE_TYPE_LIST = ['wan', 'bing', 'tiao', 'wind', 'dragon', 'flower'];
        if (TILE_TYPE_LIST.indexOf(tileA.suit) < TILE_TYPE_LIST.indexOf(tileB.suit)) {
            return -1;
        }
        if (TILE_TYPE_LIST.indexOf(tileA.suit) > TILE_TYPE_LIST.indexOf(tileB.suit)) {
            return 1;
        }
        if (tileA.number < tileB.number) {
            return -1;
        }
        if (tileA.number > tileB.number) {
            return 1;
        }
        return 0;
    }
}