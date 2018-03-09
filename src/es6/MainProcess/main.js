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

ipcMain.on('asynchronous-message_game-start', (event, arg) => {
  switch (arg) {
    case 'start-game-wmc':
      console.log('event:start-game-wmc');
      game = new GameUnitWMC();
      game.startGame();
      game.goNextRound();
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