export default class ConnectRemoteRadio {
    constructor(view) {
        this._view = view;
    }

    initialize() {
        this._view.getElementById('connect-remote-radio').addEventListener('click', this.onClickRadio.bind(this));
    }

    onClickRadio() {
        // 接続先入力欄を有効化
        let dest_ip_addr_input = this._view.getElementById('dest-ip-addr-input');
        dest_ip_addr_input.removeAttribute('disabled');
        // 解説欄の記述を変更
        let dest_explanation_span = this._view.getElementById('dest-explanation-span');
        dest_explanation_span.innerHTML = '別のPCに接続します';
    }
}
