import IndexView from '../js/view-controller-index';

global.window.addEventListener('DOMContentLoaded', () => {
    global.controller = new IndexView.StartButton(global.document);
    global.controller.initialize();
    console.log(global.window);
}, false);