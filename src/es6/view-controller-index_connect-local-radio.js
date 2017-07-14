export default class ConnectLocalRadio {
    constructor(view) {
        this._view = view;
    }

    initialize() {
        this._view.getElementById('connect-local-radio').addEventListener('click', this.onClickRadio.bind(this));
    }

    onClickRadio() {
        // 接続先入力欄を無効化
        let dest_ip_addr_input = this._view.getElementById('dest-ip-addr-input');
        dest_ip_addr_input.setAttribute('disabled', 'disabled');
        // 解説欄の記述を変更
        let dest_explanation_span = this._view.getElementById('dest-explanation-span');
        dest_explanation_span.innerHTML = 'このPCをサーバにします';
    }
}
