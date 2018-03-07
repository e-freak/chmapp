import {
    default as PlayField
} from '../js/view-controller-game_play-field'
import {
    default as ExitButton
} from '../js/view-controller-game_exit-button'
import {
    default as SelfPlayerHandTileDrawn
} from '../js/view-controller-game_self-player-hand-tile-drawn'

global.window.addEventListener('DOMContentLoaded', () => {
    global.objPlayField = new PlayField(global.document);
    global.objPlayField.initialize();
    global.objExitButton = new ExitButton(global.document);
    global.objExitButton.initialize();
    global.objSelfPlayerHandTileDrawn = new SelfPlayerHandTileDrawn(global.document);
    global.objSelfPlayerHandTileDrawn.initialize();
}, false);