'use strict'

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
        console.log(remote.getCurrentWindow());
        remote.getCurrentWindow().loadURL('file://' + __dirname + '/../html/helloworld.html');
        console.log(this._view);
    }
}

module.exports.StartButton = StartButton;