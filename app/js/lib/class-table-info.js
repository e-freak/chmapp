"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = class {
    constructor() {
        this.public = this._createPublicInfo();
        this.self = this._createSelfPlayerInfo();
        this.right = this._createRightPlayerInfo();
        this.opposite = this._createOppositePlayerInfo();
        this.left = this._createLeftPlayerInfo();
    }

    _createPublicInfo() {
        throw new Error("No wall creation logic.");
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