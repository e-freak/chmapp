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
        let dest_ip_addr_input = this._view.getElementById('dest-ip-addr-input');
        dest_ip_addr_input.setAttribute('disabled', 'disabled');

        let dest_explanation_span = this._view.getElementById('dest-explanation-span');
        dest_explanation_span.innerHTML = 'このPCをサーバにします';
    }
}
exports.default = ConnectLocalRadio;