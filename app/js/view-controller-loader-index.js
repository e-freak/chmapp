'use strict';

var _viewControllerIndex_startButton = require('../js/view-controller-index_start-button');

var _viewControllerIndex_startButton2 = _interopRequireDefault(_viewControllerIndex_startButton);

var _viewControllerIndex_connectLocalRadio = require('../js/view-controller-index_connect-local-radio');

var _viewControllerIndex_connectLocalRadio2 = _interopRequireDefault(_viewControllerIndex_connectLocalRadio);

var _viewControllerIndex_connectRemoteRadio = require('../js/view-controller-index_connect-remote-radio');

var _viewControllerIndex_connectRemoteRadio2 = _interopRequireDefault(_viewControllerIndex_connectRemoteRadio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.window.addEventListener('DOMContentLoaded', () => {
    global.objStartButton = new _viewControllerIndex_startButton2.default(global.document);
    global.objStartButton.initialize();
    global.objConnectLocalRadio = new _viewControllerIndex_connectLocalRadio2.default(global.document);
    global.objConnectLocalRadio.initialize();
    global.objConnectRemoteRadio = new _viewControllerIndex_connectRemoteRadio2.default(global.document);
    global.objConnectRemoteRadio.initialize();
}, false);