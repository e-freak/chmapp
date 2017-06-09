'use strict';

var _viewControllerIndex = require('../js/view-controller-index');

var _viewControllerIndex2 = _interopRequireDefault(_viewControllerIndex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.window.addEventListener('DOMContentLoaded', function () {
    global.controller = new _viewControllerIndex2.default.StartButton(global.document);
    global.controller.initialize();
    console.log(global.window);
}, false);