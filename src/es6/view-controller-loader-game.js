import ExitButton from '../js/view-controller-game_exit-button';
// import ConnectLocalRadio from '../js/view-controller-index_connect-local-radio';
// import ConnectRemoteRadio from '../js/view-controller-index_connect-remote-radio';

global.window.addEventListener('DOMContentLoaded', () => {
    global.objExitButton = new ExitButton(global.document);
    global.objExitButton.initialize();
    // global.objConnectLocalRadio = new ConnectLocalRadio(global.document);
    // global.objConnectLocalRadio.initialize();
    // global.objConnectRemoteRadio = new ConnectRemoteRadio(global.document);
    // global.objConnectRemoteRadio.initialize();
}, false);