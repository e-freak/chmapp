import ExitButton from '../js/view-controller-game_exit-button'
import SelfPlayerHandTileDrawn from '../js/view-controller-game_self-player-hand-tile-drawn'

global.window.addEventListener('DOMContentLoaded', () => {
    global.objExitButton = new ExitButton(global.document);
    global.objExitButton.initialize();
    global.objExitButton = new SelfPlayerHandTileDrawn(global.document);
    global.objExitButton.initialize();
}, false);