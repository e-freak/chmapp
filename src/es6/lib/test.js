import {default as Tile} from './class-tile';
import {default as GameUnitWMC} from './class-game-unit-wmc';

let tl = new Tile('1wan');
// let tl2 = new Tile('aaa');
console.log(new GameUnitWMC());
console.log(tl.imageFile);
console.log(tl.type);
console.log(tl.number);
console.log([(new Tile('4tiao')), (new Tile('west')), (new Tile('orchid')), (new Tile('east')), (new Tile('white')), (new Tile('3wan')), (new Tile('red')), (new Tile('6tiao')), (new Tile('3bing')), (new Tile('9bing')), (new Tile('winter')), (new Tile('2wan'))].sort(Tile.sortTiles));