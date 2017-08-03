import ExitButton from '../js/view-controller-game_exit-button';

global.window.addEventListener('DOMContentLoaded', () => {
    global.objExitButton = new ExitButton(global.document);
    global.objExitButton.initialize();
}, false);