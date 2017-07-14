export default class ExitButton {
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
