'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
class ConnectLocalRadio {
    constructor(view) {
        this._view = view;
    }

    initialize() {
        this._view.getElementById('connect-local-radio').addEventListener('click', this.onClickRadio.bind(this));
    }

    onClickRadio() {
        // let dest_ip_addr_input = this._view.getElementById('dest-ip-addr-input');
        // dest_ip_addr_input.setAttribute('disabled');
        // const remote = require('electron').remote;
        // console.log(remote.getCurrentWindow());
        // remote.getCurrentWindow().loadURL('file://' + __dirname + '/../html/helloworld.html');
        // console.log(this._view);
    }
}
exports.default = ConnectLocalRadio;