import electron from 'electron'
const {
    ipcRenderer
} = electron;

export default class {
    constructor(view) {
        this._view = view;
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
        this.reloadInfo(arg);
    }

    onClickButton() {
        // 文字列'discard-tile'および'draw'を非同期通信で送信
        ipcRenderer.send('asynchronous-message_game-self-player-discard', 'discard-tile', 'draw'); // 最後の引数はツモ牌を切ることを指すキー
    }

    reloadInfo(arg) {
        this._view.getElementById('wall-tiles-count').innerHTML = arg.wall.liveWall.length; // 山の枚数を更新
        this._view.getElementById('self-player-hand-tile-drawn').src = '../image/' + arg.self.drawTile.imageFile; // ツモ牌画像更新
        [...Array.from(Array(13), (_, x) => x)].forEach((element) => { // 手牌画像更新
            this._view.getElementById('self-player-hand-tile' + (element + 1)).src = '../image/' + arg.self.hand[element].imageFile;
        });
        const PLAYER_DICT = {
            'self': arg.self,
            'right': arg.right,
            'opposite': arg.opposite,
            'left': arg.left
        };
        ['self', 'right', 'opposite', 'left'].forEach((playerKey) => {
            [...Array.from(Array(8), (_, x) => x)].forEach((element) => { // 花牌画像更新
                try {
                    this._view.getElementById(playerKey + '-player-meld5-tile' + (element + 1)).src = '../image/' + PLAYER_DICT[playerKey].flowers[element].imageFile;
                } catch (e) {
                    // 配列の領域外アクセスは想定された動きなので無視する
                }
            });
            [...Array.from(Array(33), (_, x) => x)].forEach((element) => { // 捨て牌画像更新
                try {
                    this._view.getElementById(playerKey + '-discard-tile' + (element + 1)).src = '../image/' + PLAYER_DICT[playerKey].discards[element].imageFile;
                } catch (e) {
                    // 配列の領域外アクセスは想定された動きなので無視する
                }
            });
        });
    }
}