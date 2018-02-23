'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
const tileImage = exports.tileImage = {
    '1wan': 'MJ1wan.svg',
    '2wan': 'MJ2wan.svg',
    '3wan': 'MJ3wan.svg',
    '4wan': 'MJ4wan.svg',
    '5wan': 'MJ5wan.svg',
    '6wan': 'MJ6wan.svg',
    '7wan': 'MJ7wan.svg',
    '8wan': 'MJ8wan.svg',
    '9wan': 'MJ9wan.svg',

    '1bing': 'MJ1bing.svg',
    '2bing': 'MJ2bing.svg',
    '3bing': 'MJ3bing.svg',
    '4bing': 'MJ4bing.svg',
    '5bing': 'MJ5bing.svg',
    '6bing': 'MJ6bing.svg',
    '7bing': 'MJ7bing.svg',
    '8bing': 'MJ8bing.svg',
    '9bing': 'MJ9bing.svg',

    '1tiao': 'MJ1tiao.svg',
    '2tiao': 'MJ2tiao.svg',
    '3tiao': 'MJ3tiao.svg',
    '4tiao': 'MJ4tiao.svg',
    '5tiao': 'MJ5tiao.svg',
    '6tiao': 'MJ6tiao.svg',
    '7tiao': 'MJ7tiao.svg',
    '8tiao': 'MJ8tiao.svg',
    '9tiao': 'MJ9tiao.svg',

    'east': 'MJEastwind.svg',
    'south': 'MJSouthwind.svg',
    'west': 'MJWestwind.svg',
    'north': 'MJNorthwind.svg',

    'white': 'MJWhitedragon.svg',
    'green': 'MJGreendragon.svg',
    'red': 'MJReddragon.svg',

    'spring': 'MJspring.svg',
    'summer': 'MJsummer.svg',
    'autumn': 'MJautumn.svg',
    'winter': 'MJwinter.svg',

    'plum': 'MJmei.svg',
    'orchid': 'MJlan.svg',
    'chrysanthemum': 'MJju.svg',
    'bamboo': 'MJzhu.svg'
};

const tileSuit = exports.tileSuit = {
    '1wan': 'wan',
    '2wan': 'wan',
    '3wan': 'wan',
    '4wan': 'wan',
    '5wan': 'wan',
    '6wan': 'wan',
    '7wan': 'wan',
    '8wan': 'wan',
    '9wan': 'wan',

    '1bing': 'bing',
    '2bing': 'bing',
    '3bing': 'bing',
    '4bing': 'bing',
    '5bing': 'bing',
    '6bing': 'bing',
    '7bing': 'bing',
    '8bing': 'bing',
    '9bing': 'bing',

    '1tiao': 'tiao',
    '2tiao': 'tiao',
    '3tiao': 'tiao',
    '4tiao': 'tiao',
    '5tiao': 'tiao',
    '6tiao': 'tiao',
    '7tiao': 'tiao',
    '8tiao': 'tiao',
    '9tiao': 'tiao',

    'east': 'wind',
    'south': 'wind',
    'west': 'wind',
    'north': 'wind',

    'white': 'dragon',
    'green': 'dragon',
    'red': 'dragon',

    'spring': 'flower',
    'summer': 'flower',
    'autumn': 'flower',
    'winter': 'flower',

    'plum': 'flower',
    'orchid': 'flower',
    'chrysanthemum': 'flower',
    'bamboo': 'flower'
};

const tileNumber = exports.tileNumber = {
    '1wan': 1,
    '2wan': 2,
    '3wan': 3,
    '4wan': 4,
    '5wan': 5,
    '6wan': 6,
    '7wan': 7,
    '8wan': 8,
    '9wan': 9,

    '1bing': 1,
    '2bing': 2,
    '3bing': 3,
    '4bing': 4,
    '5bing': 5,
    '6bing': 6,
    '7bing': 7,
    '8bing': 8,
    '9bing': 9,

    '1tiao': 1,
    '2tiao': 2,
    '3tiao': 3,
    '4tiao': 4,
    '5tiao': 5,
    '6tiao': 6,
    '7tiao': 7,
    '8tiao': 8,
    '9tiao': 9,

    'east': 1,
    'south': 2,
    'west': 3,
    'north': 4,

    'white': 1,
    'green': 2,
    'red': 3,

    'spring': 1,
    'summer': 2,
    'autumn': 3,
    'winter': 4,

    'plum': 5,
    'orchid': 6,
    'chrysanthemum': 7,
    'bamboo': 8
};

const TILE_ATTRIBUTE = exports.TILE_ATTRIBUTE = {
    '1wan': ['MJ1wan.svg', 'wan', 1],
    '2wan': ['MJ2wan.svg', 'wan', 2],
    '3wan': ['MJ3wan.svg', 'wan', 3],
    '4wan': ['MJ4wan.svg', 'wan', 4],
    '5wan': ['MJ5wan.svg', 'wan', 5],
    '6wan': ['MJ6wan.svg', 'wan', 6],
    '7wan': ['MJ7wan.svg', 'wan', 7],
    '8wan': ['MJ8wan.svg', 'wan', 8],
    '9wan': ['MJ9wan.svg', 'wan', 9],

    '1bing': ['MJ1bing.svg', 'bing', 1],
    '2bing': ['MJ2bing.svg', 'bing', 2],
    '3bing': ['MJ3bing.svg', 'bing', 3],
    '4bing': ['MJ4bing.svg', 'bing', 4],
    '5bing': ['MJ5bing.svg', 'bing', 5],
    '6bing': ['MJ6bing.svg', 'bing', 6],
    '7bing': ['MJ7bing.svg', 'bing', 7],
    '8bing': ['MJ8bing.svg', 'bing', 8],
    '9bing': ['MJ9bing.svg', 'bing', 9],

    '1tiao': ['MJ1tiao.svg', 'tiao', 1],
    '2tiao': ['MJ2tiao.svg', 'tiao', 2],
    '3tiao': ['MJ3tiao.svg', 'tiao', 3],
    '4tiao': ['MJ4tiao.svg', 'tiao', 4],
    '5tiao': ['MJ5tiao.svg', 'tiao', 5],
    '6tiao': ['MJ6tiao.svg', 'tiao', 6],
    '7tiao': ['MJ7tiao.svg', 'tiao', 7],
    '8tiao': ['MJ8tiao.svg', 'tiao', 8],
    '9tiao': ['MJ9tiao.svg', 'tiao', 9],

    'east': ['MJEastwind.svg', 'wind', 1],
    'south': ['MJSouthwind.svg', 'wind', 2],
    'west': ['MJWestwind.svg', 'wind', 3],
    'north': ['MJNorthwind.svg', 'wind', 4],

    'white': ['MJWhitedragon.svg', 'dragon', 1],
    'green': ['MJGreendragon.svg', 'dragon', 2],
    'red': ['MJReddragon.svg', 'dragon', 3],

    'spring': ['MJspring.svg', 'flower', 1],
    'summer': ['MJsummer.svg', 'flower', 2],
    'autumn': ['MJautumn.svg', 'flower', 3],
    'winter': ['MJwinter.svg', 'flower', 4],

    'plum': ['MJmei.svg', 'flower', 5],
    'orchid': ['MJlan.svg', 'flower', 6],
    'chrysanthemum': ['MJju.svg', 'flower', 7],
    'bamboo': ['MJzhu.svg', 'flower', 8]
};