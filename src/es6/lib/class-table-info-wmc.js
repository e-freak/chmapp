/**
 * ゲーム1セットのクラス
 * これを継承して日本麻雀、中国麻雀のクラスを作る
 */
import {
    default as TabelInfo
} from './class-table-info';

export default class extends TabelInfo {
    constructor() {
        super(); /* このクラスで定義した_create系メソッドが呼ばれる */
    }

    _createPublicInfo() {
        throw new Error("aaaa.");
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