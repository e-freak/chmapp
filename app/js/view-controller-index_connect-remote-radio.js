'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
class ConnectRemoteRadio {
    constructor(view) {
        this._view = view;
    }

    initialize() {
        this._view.getElementById('connect-remote-radio').addEventListener('click', this.onClickRadio.bind(this));
    }

    onClickRadio() {
        let dest_ip_addr_input = this._view.getElementById('dest-ip-addr-input');
        dest_ip_addr_input.removeAttribute('disabled');

        let dest_explanation_span = this._view.getElementById('dest-explanation-span');
        dest_explanation_span.innerHTML = '別のPCに接続します';
    }
}
exports.default = ConnectRemoteRadio;