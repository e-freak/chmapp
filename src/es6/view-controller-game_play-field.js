import electron from 'electron'
const {
    ipcRenderer
} = electron;
import {
    default as ViewController
} from './lib/class-view-controller-game'

export default class extends ViewController {
    constructor(view) {
        super(view);
    }

    initialize() {
        ipcRenderer.on('asynchronous-reply_game-start', this._onInitializeEventHandler.bind(this));
        ipcRenderer.send('asynchronous-message_game-start', 'start-game-wmc');
    }

    _onInitializeEventHandler(event, arg) { // MainProcessとのIPCにおけるイベントハンドラ、argは卓情報
        console.log(arg);
        this.reloadUI(arg);
    }
}