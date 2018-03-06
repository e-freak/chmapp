import electron from 'electron'
const {
    ipcRenderer
} = electron;

export default class PlayField {
    constructor(view) {
        this._view = view;
    }

    initialize() {
        this._view.getElementsByClassName('play-field')[0].addEventListener('load', this.onLoad.bind(this));
        ipcRenderer.on('asynchronous-reply_game', this._onLoadEventHandler.bind(this));
        ipcRenderer.send('asynchronous-message_game', 'start-game-wmc');
    }

    onLoad() {
        // ツモ牌画像が変わるたびにonLoadが走るので、前回のイベントは削除する
        // ipcRenderer.removeListener('asynchronous-reply_game', this._onLoadEventHandler.bind(this));
        ipcRenderer.removeAllListeners('asynchronous-reply_game');
        //非同期通信の受信の応答処理（asynchronous-reply_self-player-hand-tile-drawnチャンネル）
        ipcRenderer.on('asynchronous-reply_game', this._onLoadEventHandler.bind(this));
        ipcRenderer.send('asynchronous-message_game', 'start-game-wmc');
        console.log('ooooo');
    }

    _onLoadEventHandler(event, arg) { // MainProcessとのIPCにおけるイベントハンドラ
        // MainProcessから受け取った牌情報をもとに、ツモ牌の画像を変更する
        // this._view.getElementById('self-player-hand-tile-drawn').src = '../image/' + tileImages[arg];
        console.log(arg);
    }
}
