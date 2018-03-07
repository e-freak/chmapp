import electron from 'electron'
const {
    ipcRenderer
} = electron;

export default class PlayField {
    constructor(view) {
        this._view = view;
    }

    initialize() {
        ipcRenderer.on('asynchronous-reply_game-start', this._onInitializeEventHandler.bind(this));
        ipcRenderer.send('asynchronous-message_game-start', 'start-game-wmc');
    }

    _onInitializeEventHandler(event, arg) { // MainProcessとのIPCにおけるイベントハンドラ
        console.log(arg);
        this._view.getElementById('wall-tiles-count').innerHTML = arg.wall.liveWall.length; // 山の枚数を更新
        this._view.getElementById('self-player-hand-tile-drawn').src = '../image/' + arg.self.drawTile.imageFile; // ツモ牌画像更新
        [...Array.from(Array(13), (_, x) => x)].forEach((element) => { // 手牌画像更新
            this._view.getElementById('self-player-hand-tile' + (element + 1)).src = '../image/' + arg.self.hand[element].imageFile;
        });
        [...Array.from(Array(8), (_, x) => x)].forEach((element) => { // 花牌画像更新
            try {
                this._view.getElementById('self-player-meld5-tile' + (element + 1)).src = '../image/' + arg.self.flowers[element].imageFile;
            } catch (e) {
                // 配列の領域外アクセスは想定された動きなので無視する
            }
            try {
                this._view.getElementById('right-player-meld5-tile' + (element + 1)).src = '../image/' + arg.right.flowers[element].imageFile;
            } catch (e) {
                // 配列の領域外アクセスは想定された動きなので無視する
            }
            try {
                this._view.getElementById('opposite-player-meld5-tile' + (element + 1)).src = '../image/' + arg.opposite.flowers[element].imageFile;
            } catch (e) {
                // 配列の領域外アクセスは想定された動きなので無視する
            }
            try {
                this._view.getElementById('left-player-meld5-tile' + (element + 1)).src = '../image/' + arg.left.flowers[element].imageFile;
            } catch (e) {
                // 配列の領域外アクセスは想定された動きなので無視する
            }
        });
    }
}