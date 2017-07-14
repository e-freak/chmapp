'use strict';

var _viewControllerGame_exitButton = require('../js/view-controller-game_exit-button');

var _viewControllerGame_exitButton2 = _interopRequireDefault(_viewControllerGame_exitButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.window.addEventListener('DOMContentLoaded', () => {
    global.objExitButton = new _viewControllerGame_exitButton2.default(global.document);
    global.objExitButton.initialize();
}, false);