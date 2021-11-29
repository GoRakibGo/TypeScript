import { Player } from './class/Player.js';
let neymar;
neymar = new Player('Neymar', 30, 'Brazil');
const messi = new Player('Messi', 35, 'Argentina');
console.log(messi.age);
console.log(messi.country);
const players = [];
players.push(messi);
players.push(neymar);
function drawRectangle(options) {
    let width = options.width;
    let length = options.length;
}
let theeDoptions = {
    width: 30,
    length: 20,
    height: 10,
};
drawRectangle(theeDoptions);
