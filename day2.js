import { getInput } from './aoc_util.js';

const input = await getInput(2);
const LOSE = 0;
const TIE = 3;
const WIN = 6;
const key = new Map([
    ['X', 'A'],
    ['Y', 'B'],
    ['Z', 'C'],
]);
const shapes = new Map([
    ['A', 1], // rock
    ['B', 2], // paper
    ['C', 3], // scissors
]);

const scoreForKey = input.split('\r\n')
    .map(m => [shapes.get(m.substring(0, 1)), shapes.get(key.get(m.substring(2)))])
    .reduce((acc, m) => {
        return acc + m[1] + (m[0] - m[1] == 1 || m[0] - m[1] == -2 ? LOSE : (m[0] == m[1] ? TIE : WIN));
    }, 0);

console.log('Score if guide is a key ' + scoreForKey);

const scoreForEnd = input.split('\r\n')
    .map(m => [shapes.get(m.substring(0, 1)), m.substring(2)])
    .reduce((acc, m) => {
        let round;
        switch (m[1]) {
            case 'X': round = LOSE + (m[0] != 1 ? m[0] - 1 : shapes.get('C'));
                break;
            case 'Y': round = TIE + m[0];
                break;
            case 'Z': round = WIN + (m[0] != 3 ? m[0] + 1 : shapes.get('A'));
                break;
            default:
        } 
        return acc + round;
    }, 0);

console.log('Score if guide is a how to end ' + scoreForEnd);