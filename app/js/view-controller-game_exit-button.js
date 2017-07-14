'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
class ExitButton {
    constructor(view) {
        this._view = view;
    }

    initialize() {
        this._view.getElementById('exit-button').addEventListener('click', this.onClickButton.bind(this));
    }

    onClickButton() {
        const remote = require('electron').remote;
        remote.getCurrentWindow().loadURL('file://' + __dirname + '/../html/index.html');
    }
}
exports.default = ExitButton;