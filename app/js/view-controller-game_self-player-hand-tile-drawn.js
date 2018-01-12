'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _associativeArray_tileImages = require('./Data/associative-array_tile-images');

var _electron = require('electron');

var _electron2 = _interopRequireDefault(_electron);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
    ipcRenderer
} = _electron2.default;

class SelfPlayerHandTileDrawn {
    constructor(view) {
        this._view = view;
    }

    initialize() {
        this._view.getElementById('self-player-hand-tile-drawn').addEventListener('load', this.onLoad.bind(this));
        this._view.getElementById('self-player-hand-tile-drawn').addEventListener('click', this.onClickButton.bind(this));
    }

    onLoad() {
        ipcRenderer.removeListener('asynchronous-reply_self-player-hand-tile-drawn', this._onLoadEventHandler.bind(this));

        ipcRenderer.on('asynchronous-reply_self-player-hand-tile-drawn', this._onLoadEventHandler.bind(this));
    }

    _onLoadEventHandler(event, arg) {
        this._view.getElementById('self-player-hand-tile-drawn').src = '../image/' + _associativeArray_tileImages.tileImages[arg];
    }

    onClickButton() {
        ipcRenderer.send('asynchronous-message_self-player-hand-tile-drawn', 'draw-tile');
    }
}
exports.default = SelfPlayerHandTileDrawn;