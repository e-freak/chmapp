"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classTableInfo = require("./class-table-info");

var _classTableInfo2 = _interopRequireDefault(_classTableInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = class extends _classTableInfo2.default {
    constructor() {
        super();
    }

    _createPublicInfo() {
        throw new Error("aaaa.");
    }

    _createSelfPlayerInfo() {
        throw new Error("No self-player creation logic.");
    }

    _createRightPlayerInfo() {
        throw new Error("No right-player creation logic.");
    }

    _createOppositePlayerInfo() {
        throw new Error("No opposite-player creation logic.");
    }

    _createLeftPlayerInfo() {
        throw new Error("No left-player creation logic.");
    }
};