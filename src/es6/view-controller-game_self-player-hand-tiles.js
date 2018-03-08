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
        // 手牌とツモ牌画像に牌を切る操作を登録する
        ['draw', ...Array.from(Array(13), (_, num) => {
            return String(num + 1)
        })].forEach((element, index) => {
            const idName = 'self-player-hand-tile' + (element === 'draw' ? '-drawn' : String(element));
            this._view.getElementById(idName).addEventListener('load', this.onLoad.bind(this));
            this._view.getElementById(idName).addEventListener('click', this.onClickButton.bind(this, index));
        })
    }

    _onLoadEventHandler(event, arg) { // MainProcessとのIPCにおけるイベントハンドラ
        // MainProcessから受け取った牌情報をもとに、ツモ牌の画像を変更する
        this.reloadUI(arg);
    }

    onLoad() {
        // ツモ牌画像が変わるたびにonLoadが走るので、前回のイベントは削除する
        // ipcRenderer.removeListener('asynchronous-reply_game-self-player-discard', this._onLoadEventHandler.bind(this));
        ipcRenderer.removeAllListeners('asynchronous-reply_game-self-player-discard'); // なぜかremoveListenerが効かなくなったので全消去
        //非同期通信の受信の応答処理（'asynchronous-reply_game-self-player-discard'チャンネル）
        ipcRenderer.on('asynchronous-reply_game-self-player-discard', this._onLoadEventHandler.bind(this));
    }

    onClickButton(keyIndex) {
        const TILE_KEY = ['draw', ...Array.from(Array(13), (_, num) => {
            return 'hand' + String(num + 1)
        })]
        // 文字列'discard-tile'とどの牌を切るかのキーを非同期通信で送信
        ipcRenderer.send('asynchronous-message_game-self-player-discard', 'discard-tile', TILE_KEY[keyIndex]); // 最後の引数はどの牌を切るかを指すキー
    }
}