'use strict';

var _tileClass = require('./tile-class');

var _tileClass2 = _interopRequireDefault(_tileClass);

var _classTableInfoWmc = require('./class-table-info-wmc');

var _classTableInfoWmc2 = _interopRequireDefault(_classTableInfoWmc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let tl = new _tileClass2.default('1wan');

console.log(new _classTableInfoWmc2.default());
console.log(tl.imageFile);
console.log(tl.type);
console.log(tl.number);
console.log([new _tileClass2.default('4tiao'), new _tileClass2.default('west'), new _tileClass2.default('orchid'), new _tileClass2.default('east'), new _tileClass2.default('white'), new _tileClass2.default('3wan'), new _tileClass2.default('red'), new _tileClass2.default('6tiao'), new _tileClass2.default('3bing'), new _tileClass2.default('9bing'), new _tileClass2.default('winter'), new _tileClass2.default('2wan')].sort(_tileClass2.default.sortTiles));