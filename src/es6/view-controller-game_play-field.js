import electron from 'electron'
const {
    ipcRenderer
} = electron;

export default class {
    constructor(view) {
        this._view = view;
    }

    initialize() {
        ipcRenderer.on('asynchronous-reply_game-start', this._onInitializeEventHandler.bind(this));
        ipcRenderer.send('asynchronous-message_game-start', 'start-game-wmc');
    }

    _onInitializeEventHandler(event, arg) { // MainProcessとのIPCにおけるイベントハンドラ、argは卓情報
        console.log(arg);
        this.reloadInfo(arg);
        // this._view.getElementById('wall-tiles-count').innerHTML = arg.wall.liveWall.length; // 山の枚数を更新
        // this._view.getElementById('self-player-hand-tile-drawn').src = '../image/' + arg.self.drawTile.imageFile; // ツモ牌画像更新
        // [...Array.from(Array(13), (_, x) => x)].forEach((element) => { // 手牌画像更新
        //     this._view.getElementById('self-player-hand-tile' + (element + 1)).src = '../image/' + arg.self.hand[element].imageFile;
        // });
        // [...Array.from(Array(8), (_, x) => x)].forEach((element) => { // 花牌画像更新
        //     try {
        //         this._view.getElementById('self-player-meld5-tile' + (element + 1)).src = '../image/' + arg.self.flowers[element].imageFile;
        //     } catch (e) {
        //         // 配列の領域外アクセスは想定された動きなので無視する
        //     }
        //     try {
        //         this._view.getElementById('right-player-meld5-tile' + (element + 1)).src = '../image/' + arg.right.flowers[element].imageFile;
        //     } catch (e) {
        //         // 配列の領域外アクセスは想定された動きなので無視する
        //     }
        //     try {
        //         this._view.getElementById('opposite-player-meld5-tile' + (element + 1)).src = '../image/' + arg.opposite.flowers[element].imageFile;
        //     } catch (e) {
        //         // 配列の領域外アクセスは想定された動きなので無視する
        //     }
        //     try {
        //         this._view.getElementById('left-player-meld5-tile' + (element + 1)).src = '../image/' + arg.left.flowers[element].imageFile;
        //     } catch (e) {
        //         // 配列の領域外アクセスは想定された動きなので無視する
        //     }
        // });
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
        });
    }
}