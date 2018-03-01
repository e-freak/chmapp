/**
 * ゲーム1セットのクラス
 * これを継承して日本麻雀、中国麻雀のクラスを作る
 */
import {
    default as Tile
} from './class-tile';

export default class {
    constructor() {
        this._TileSetCommon = [];
        this._TileSetFlower = [];
        /* 同じ牌は4枚必要（日本麻雀で赤牌ありの場合は専用のタイルセット生成処理が必要） */
        [...Array.from(Array(9), (_, x) => {
                return (x + 1) + "wan"
            }),
            ...Array.from(Array(9), (_, x) => {
                return (x + 1) + "bing"
            }),
            ...Array.from(Array(9), (_, x) => {
                return (x + 1) + "tiao"
            }),
            'east', 'south', 'west', 'north',
            'white', 'green', 'red'
        ].forEach((element, index, array) => {
            this._TileSetCommon.push(new Tile(element));
        });
        this._TileSetCommon = [...this._TileSetCommon, ...this._TileSetCommon, ...this._TileSetCommon, ...this._TileSetCommon];
        /* 花牌は各1枚のみ */
        ['spring', 'summer', 'autumn', 'winter', 'plum',
            'orchid', 'chrysanthemum', 'bamboo'
        ].forEach((element, index, array) => {
            this._TileSetFlower.push(new Tile(element));
        });

        this.liveWall = this._createLiveWall();
        this.deadWall = this._createDeadWall(); /* 王牌 */
    }

    _createLiveWall() {
        throw new Error("No wall creation logic.");
    }

    _createDeadWall() {
        throw new Error("No dead wall creation logic.");
    }
}