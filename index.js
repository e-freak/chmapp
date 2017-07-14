// アプリケーションをコントロールするモジュール
const { app, BrowserWindow } = require('electron')

// メインウィンドウはGCされないようにグローバル宣言
let mainWindow;

// 全てのウィンドウが閉じたら終了
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// Electronの初期化完了後に実行
app.on('ready', function() {
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
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});