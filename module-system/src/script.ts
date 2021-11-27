import { Player } from './class/Player.js';
const neymar = new Player('Neymar', 30, 'Brazil');
const messi = new Player('Messi', 35, 'Argentina');

console.log(messi.age);
console.log(messi.country);

const players: Player[] = [];
players.push(messi);
players.push(neymar);