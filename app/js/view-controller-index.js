'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StartButton = function () {
    function StartButton(view) {
        _classCallCheck(this, StartButton);

        this._view = view;
    }

    _createClass(StartButton, [{
        key: 'initialize',
        value: function initialize() {
            this._view.getElementById('start-button').addEventListener('click', this.onClickButton.bind(this));
        }
    }, {
        key: 'onClickButton',
        value: function onClickButton() {
            console.log(this._view);
            var remote = require('electron').remote;
            console.log(remote.getCurrentWindow());
            remote.getCurrentWindow().loadURL('file://' + __dirname + '/../html/helloworld.html');
            console.log(this._view);
        }
    }]);

    return StartButton;
}();

module.exports.StartButton = StartButton;