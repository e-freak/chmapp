'use strict';

var _associativeArray_tileImages = require('../Data/associative-array_tile-images');

var _electron = require('electron');

var _electron2 = _interopRequireDefault(_electron);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  app,
  BrowserWindow,
  ipcMain
} = _electron2.default;

let mainWindow;

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 960,
    height: 720
  });
  mainWindow.loadURL('file://' + __dirname + '/../..//html/index.html');

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});

ipcMain.on('asynchronous-message_self-player-hand-tile-drawn', (event, arg) => {
  if (arg === 'draw-tile') {
    let tiles = [];
    Object.keys(_associativeArray_tileImages.tileImages).forEach((element, index, array) => {
      tiles.push(element);
    });
    let tilenum = Math.floor(Math.random() * tiles.length);
    console.log(tiles[tilenum]);

    event.sender.send('asynchronous-reply_self-player-hand-tile-drawn', tiles[tilenum]);
  }
});