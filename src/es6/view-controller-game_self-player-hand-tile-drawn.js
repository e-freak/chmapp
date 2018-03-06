import {
    tileImages
} from './Data/associative-array_tile-images'
import electron from 'electron'
const {
    ipcRenderer
} = electron;

export default class SelfPlayerHandTileDrawn {
    constructor(view) {
        this._view = view;
    }

    initialize() {
        this._view.getElementById('self-player-hand-tile-drawn').addEventListener('load', this.onLoad.bind(this));
        this._view.getElementById('self-player-hand-tile-drawn').addEventListener('click', this.onClickButton.bind(this));
    }

    onLoad() {
        // ツモ牌画像が変わるたびにonLoadが走るので、前回のイベントは削除する
        // ipcRenderer.removeListener('asynchronous-reply_self-player-hand-tile-drawn', this._onLoadEventHandler.bind(this));
        // ipcRenderer.removeListener('asynchronous-reply_game', this._onLoadEventHandler.bind(this));
        ipcRenderer.removeAllListeners('asynchronous-reply_game');
        //非同期通信の受信の応答処理（asynchronous-reply_self-player-hand-tile-drawnチャンネル）
        // ipcRenderer.on('asynchronous-reply_self-player-hand-tile-drawn', this._onLoadEventHandler.bind(this));
        ipcRenderer.on('asynchronous-reply_game', this._onLoadEventHandler.bind(this));
    }

    _onLoadEventHandler(event, arg) { // MainProcessとのIPCにおけるイベントハンドラ
        // MainProcessから受け取った牌情報をもとに、ツモ牌の画像を変更する
        this._view.getElementById('self-player-hand-tile-drawn').src = '../image/' + tileImages[arg];
        console.log('aaaaa');
    }

    onClickButton() {
        // asynchronous-message_self-player-hand-tile-drawnチャンネルで文字列"draw-tile"を非同期通信で送信
        // ipcRenderer.send('asynchronous-message_self-player-hand-tile-drawn', 'draw-tile');
        ipcRenderer.send('asynchronous-message_game', 'draw-tile');
    }
}