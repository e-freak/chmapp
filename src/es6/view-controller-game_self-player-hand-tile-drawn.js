import electron from 'electron'
const {
    ipcRenderer
} = electron;
import {
    default as ViewController
} from './lib/class-view-controller-game'

export default class extends ViewController {
    constructor(view) {
        super(view);
    }

    initialize() {
        this._view.getElementById('self-player-hand-tile-drawn').addEventListener('load', this.onLoad.bind(this));
        this._view.getElementById('self-player-hand-tile-drawn').addEventListener('click', this.onClickButton.bind(this));
    }

    onLoad() {
        // ツモ牌画像が変わるたびにonLoadが走るので、前回のイベントは削除する
        // ipcRenderer.removeListener('asynchronous-reply_game-self-player-discard', this._onLoadEventHandler.bind(this));
        ipcRenderer.removeAllListeners('asynchronous-reply_game-self-player-discard'); // なぜかremoveListenerが効かなくなったので全消去
        //非同期通信の受信の応答処理（'asynchronous-reply_game-self-player-discard'チャンネル）
        ipcRenderer.on('asynchronous-reply_game-self-player-discard', this._onLoadEventHandler.bind(this));
    }

    _onLoadEventHandler(event, arg) { // MainProcessとのIPCにおけるイベントハンドラ
        // MainProcessから受け取った牌情報をもとに、ツモ牌の画像を変更する
        this.reloadUI(arg);
    }

    onClickButton() {
        // 文字列'discard-tile'および'draw'を非同期通信で送信
        ipcRenderer.send('asynchronous-message_game-self-player-discard', 'discard-tile', 'draw'); // 最後の引数はツモ牌を切ることを指すキー
    }
}