// アプリケーションをコントロールするモジュール
const { app, BrowserWindow } = require('electron')

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
  mainWindow.loadURL('file://' + __dirname + '/app/html/index.html');
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