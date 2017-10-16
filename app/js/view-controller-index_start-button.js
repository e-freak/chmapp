'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
class StartButton {
    constructor(view) {
        this._view = view;
    }

    initialize() {
        this._view.getElementById('start-button').addEventListener('click', this.onClickButton.bind(this));
    }

    onClickButton() {
        console.log(this._view);
        const remote = require('electron').remote;

        remote.getCurrentWindow().loadURL('file://' + __dirname + '/../html/game.html');
        console.log(this._view);
    }
}
exports.default = StartButton;
