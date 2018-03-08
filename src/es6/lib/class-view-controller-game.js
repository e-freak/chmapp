/** View Controllerのスーパークラス
 *  ほぼreloadUI専用
 */
export default class {
    constructor(view) {
        this._view = view;
    }

    reloadUI(gameInfo) {
        this._view.getElementById('wall-tiles-count').innerHTML = gameInfo.wall.liveWall.length; // 山の枚数を更新
        const PLAYER_DICT = {
            'self': gameInfo.self,
            'right': gameInfo.right,
            'opposite': gameInfo.opposite,
            'left': gameInfo.left
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
        // 自家用の特別な処理
        if(gameInfo.self.drawTile !== undefined) {
            this._view.getElementById('self-player-hand-tile-drawn').src = '../image/' + gameInfo.self.drawTile.imageFile; // ツモ牌画像更新
        } else {
            this._view.getElementById('self-player-hand-tile-drawn').src = '../image/MJback.svg' // ツモ牌画像更新
        }
        [...Array.from(Array(13), (_, x) => x)].forEach((element) => { // 手牌画像更新
            this._view.getElementById('self-player-hand-tile' + (element + 1)).src = '../image/' + gameInfo.self.hand[element].imageFile;
        });
    }
}