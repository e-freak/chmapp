import {
  tileImages
} from '../Data/associative-array_tile-images'
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

//asynchronous-message_self-player-hand-tile-drawnチャンネルの受信処理
ipcMain.on('asynchronous-message_self-player-hand-tile-drawn', (event, arg) => {
  if (arg === 'draw-tile') {
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

ipcMain.on('asynchronous-message_game', (event, arg) => {
  switch (arg) {
    case 'start-game-wmc':
      console.log('start-game-wmc');
      event.sender.send('asynchronous-reply_game', 'hoge-');
      break;
    case 'draw-tile':
      console.log('draw-tile');
      event.sender.send('asynchronous-reply_game', getRandomTile());
      break;
    default:
      console.log('Error: Unexpected behavior.');
  }
});

function getRandomTile() {
  // 連想配列からランダムに牌を選ぶ処理
  let tiles = []
  Object.keys(tileImages).forEach((element, index, array) => {
    tiles.push(element);
  })
  let tilenum = Math.floor(Math.random() * tiles.length);
  console.log(tiles[tilenum]);
  return tiles[tilenum];
}