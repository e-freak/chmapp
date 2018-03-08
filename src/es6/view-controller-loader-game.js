import {
    default as PlayField
} from '../js/view-controller-game_play-field'
import {
    default as ExitButton
} from '../js/view-controller-game_exit-button'
import {
    default as SelfPlayerHandTileDrawn
} from '../js/view-controller-game_self-player-hand-tile-drawn'
import {
    default as SelfPlayerHandTiles
} from '../js/view-controller-game_self-player-hand-tiles'

global.window.addEventListener('DOMContentLoaded', () => {
    global.objPlayField = new PlayField(global.document);
    global.objPlayField.initialize();
    global.objExitButton = new ExitButton(global.document);
    global.objExitButton.initialize();
    // global.objSelfPlayerHandTileDrawn = new SelfPlayerHandTileDrawn(global.document);
    // global.objSelfPlayerHandTileDrawn.initialize();
    global.objSelfPlayerHandTiles = new SelfPlayerHandTiles(global.document);
    global.objSelfPlayerHandTiles.initialize();
}, false);