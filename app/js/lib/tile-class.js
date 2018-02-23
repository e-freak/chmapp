'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constTileAttribute = require('./const-tile-attribute');

exports.default = class {
    constructor(name) {
        if (!(name in _constTileAttribute.TILE_ATTRIBUTE)) {
            throw new Error("対応していない牌です。");
        }
        this.name = name;
        this.imageFile = _constTileAttribute.TILE_ATTRIBUTE[name][0];
        this.suit = _constTileAttribute.TILE_ATTRIBUTE[name][1];
        this.number = _constTileAttribute.TILE_ATTRIBUTE[name][2];
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
};