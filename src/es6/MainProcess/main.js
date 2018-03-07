import {
  tileImages
} from '../Data/associative-array_tile-images'
import {
  TILE_ATTRIBUTE
} from '../lib/const-tile-attribute';
import {
  default as GameUnitWMC
} from '../lib/class-game-unit-wmc';
// アプリケーションをコントロールするモジュール
import electron from 'electron'
const {
  app,
  BrowserWindow,
  ipcMain
} = electron;

// メインウィンドウはGCされないようにグローバル宣言
let mainWindow;

// 全てのウィンドウが閉じたら終了
app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// Electronの初期化完了後に実行
app.on('ready', () => {
  // メイン画面の表示
  mainWindow = new BrowserWindow({
    width: 960,
    height: 720
  });
  mainWindow.loadURL('file://' + __dirname + '/../..//html/index.html');
  // メニューバーを非表示
  // mainWindow.setMenu(null);
  // デバッグツールのDevToolsを表示
  // mainWindow.webContents.openDevTools();

  //ウィンドウが閉じられたらアプリも終了
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // ウィンドウサイズのアスペクト比固定
  // mainWindow.on('resize', () => {
  //   setTimeout(() => {
  //     let size = mainWindow.getSize();
  //     mainWindow.setSize(size[0], parseInt(size[0] * 3 / 4));
  //   }, 10);
  // });
});

// ロジックを含むインスタンスはこちら
let game;

//asynchronous-message_self-player-hand-tile-drawnチャンネルの受信処理
ipcMain.on('asynchronous-message_self-player-hand-tile-drawn', (event, arg) => {
  if (arg === 'discard-tile') {
    // 連想配列からランダムに牌を選ぶ処理
    let tiles = []
    Object.keys(tileImages).forEach((element, index, array) => {
      tiles.push(element);
    })
    let tilenum = Math.floor(Math.random() * tiles.length);
    console.log(tiles[tilenum]);
    // event.senderに送信元のプロセスが設定されているので、asynchronous-reply_self-player-hand-tile-drawnチャンネルで牌を示す文字列を非同期通信で送信元に送信
    event.sender.send('asynchronous-reply_self-player-hand-tile-drawn', tiles[tilenum]);
    // ※event.senderはwebContentsオブジェクト
  }
});

ipcMain.on('asynchronous-message_game-start', (event, arg) => {
  switch (arg) {
    case 'start-game-wmc':
      console.log('event:start-game-wmc');
      game = new GameUnitWMC();
      game.startRound();
      game.letPlayerDraw(game.self);
      event.sender.send('asynchronous-reply_game-start', game);
      break;
    default:
      console.log('Error: Unexpected behavior.');
  }
});

ipcMain.on('asynchronous-message_game-self-player-discard', (event, arg, tileKey) => {
  switch (arg) {
    case 'discard-tile':
      console.log('event:discard-tile');
      // event.sender.send('asynchronous-reply_game-self-player-discard', getRandomTile());
      game.letPlayerDiscard(game.self, tileKey);
      game.letPlayerDraw(game.right);
      game.letPlayerDiscard(game.right, tileKey);
      game.letPlayerDraw(game.opposite);
      game.letPlayerDiscard(game.opposite, tileKey);
      game.letPlayerDraw(game.left);
      game.letPlayerDiscard(game.left, tileKey);
      game.letPlayerDraw(game.self);
      event.sender.send('asynchronous-reply_game-self-player-discard', game);
      break;
    default:
      console.log('Error: Unexpected behavior.');
  }
});

function getRandomTile() {
  // 連想配列からランダムに牌を選ぶ処理
  let tiles = []
  Object.keys(TILE_ATTRIBUTE).forEach((element, index, array) => {
    tiles.push(element); // 連想配列のキーを詰め込む
  })
  let tilenum = Math.floor(Math.random() * tiles.length);
  console.log(tiles[tilenum]);
  return tiles[tilenum];
}