import {default as Tile} from './tile-class';
import {default as TableInfoWMC} from './class-table-info-wmc';

let tl = new Tile('1wan');
// let tl2 = new Tile('aaa');
console.log(new TableInfoWMC());
console.log(tl.imageFile);
console.log(tl.type);
console.log(tl.number);
console.log([(new Tile('4tiao')), (new Tile('west')), (new Tile('orchid')), (new Tile('east')), (new Tile('white')), (new Tile('3wan')), (new Tile('red')), (new Tile('6tiao')), (new Tile('3bing')), (new Tile('9bing')), (new Tile('winter')), (new Tile('2wan'))].sort(Tile.sortTiles));