import { inflateRaw } from 'zlib';
import { Player } from './class/Player.js';
import{ isPlayer } from './interfaces/isPlayer.js'

let neymar: isPlayer;
neymar = new Player('Neymar', 30, 'Brazil')
const messi = new Player('Messi', 35, 'Argentina');

console.log(messi.age);
console.log(messi.country);

const players: Player[] = [];
players.push(messi);
players.push(neymar);

// interface
interface RectangleOptions{
    width: number;
    length: number;
}
function drawRectangle(options: RectangleOptions) {
    let width = options.width;
    let length = options.length;
}

let theeDoptions = {
    width: 30,
    length: 20,
    height: 10,
};
drawRectangle(theeDoptions);
