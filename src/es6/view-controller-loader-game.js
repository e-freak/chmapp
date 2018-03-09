import {
    default as PlayField
} from '../js/view-controller-game_play-field'
import {
    default as ExitButton
} from '../js/view-controller-game_exit-button'
import {
    default as SelfPlayerHandTiles
} from '../js/view-controller-game_self-player-hand-tiles'

global.window.addEventListener('DOMContentLoaded', () => {
    global.objPlayField = new PlayField(global.document);
    global.objPlayField.initialize();
    global.objExitButton = new ExitButton(global.document);
    global.objExitButton.initialize();
    global.objSelfPlayerHandTiles = new SelfPlayerHandTiles(global.document);
    global.objSelfPlayerHandTiles.initialize();
}, false);